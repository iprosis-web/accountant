import { Injectable } from '@angular/core';
import { CustomerReportModel } from '../models/customerReportModel';
import { DateFilterModel } from '../models/dateFilterModel';
import { customer } from '../models/customer';
import { reports } from '../models/report';
import { Indications, Statuses } from '../Utils/Enums'
import { contact } from '../models/contact';
import { FullCustomerModel } from '../models/fullCustomerModel';
import { ReportDetailsModel } from '../models/reportDetailsModel';
import { customersData } from '../mock-data/customersData';
import { contactsData } from '../mock-data/contactData';
import { reportsData } from '../mock-data/reportsData';
import { Subject, Observable, Observer, observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ApiResult } from '../models/apiResult';
import Timestamp from 'firebase-firestore-timestamp';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  customersReportsModelSubject = new Subject<CustomerReportModel[]>();
  // customersModelSubject = new Subject<>();
  private customers: customer[] = new customersData().customers;

  private contacts: contact[] = new contactsData().contacts;

  private reports: reports[] = new reportsData().fillReportsNullableValues();

  private dateFilter: DateFilterModel = null;
  private customerId: string = null;
  private status: number = null;

  statuses = [
    {
      id: 1,
      name: "בעבודה"
    },
    {
      id: 2,
      name: "לא הותחל"
    },
    {
      id: 3,
      name: "הסתיים"
    }];

  constructor(private firestore: AngularFirestore) { }

  getCustomersReports(dateFilter: DateFilterModel, customerId: string, status: number) {
    let startDate =  dateFilter.startDate.getTime();
    let endDate =  dateFilter.endDate.getTime()
    let collectionRef: AngularFirestoreCollection;
    if (customerId != null || customerId != undefined) {
      if (dateFilter != null || dateFilter != undefined) {
        if (status != null || status != undefined) {
          collectionRef = this.firestore.collection("reports", ref =>
            ref.where("customerId", "==", customerId)
              .where("status", "==", status)
              .where('creatDate', '>=', startDate)
              .where('creatDate', '<=',endDate))
        }
        else {
          collectionRef = this.firestore.collection("customers", ref =>
            ref.where("customerId", "==", customerId)
              .where('creatDate', '>=', startDate)
              .where('creatDate', '<=', endDate))
        }
      }
      else {
        if (status != null || status != undefined) {
          collectionRef = this.firestore.collection("reports", ref =>
            ref.where("customerId", "==", customerId)
              .where("status", "==", status))
        } else {
          collectionRef = this.firestore.collection("reports", ref =>
            ref.where("customerId", "==", customerId))
        }
      }
    }
    else {
      if (dateFilter != null || dateFilter != undefined) {
        if (status != null || status != undefined) {
          collectionRef = this.firestore.collection("reports", ref =>
            ref.where("status", "==", status)
              .where('creatDate', '>=', startDate)
              .where('creatDate', '<=', endDate))
        } else {
          collectionRef = this.firestore.collection("reports", ref =>
            ref.where('creatDate', '>=',startDate)
              .where('creatDate', '<=',endDate))

        }
      }
      else {
        collectionRef = this.firestore.collection("reports")
      }

    }

    return (
    
      collectionRef.get().pipe(map(actions => {
        let reportsArr: CustomerReportModel[] = [];
        let customerIds: string[] = [];
        actions.forEach(el => {
          let d = new Date(el.data().creatDate);
          customerIds.push(el.data().customerId);
          let tempElem = {
            reportID: el.data().id,
            customerID: el.data().customerId,
            companyName:null,
            companyEmail: null,
            date: d,
            dateStr: d.getMonth() + 1 + '.' + d.getFullYear(),
            status:  this.statuses.find(s => s.id ==  el.data().status).name,
            statusNum: el.data().status,
            indication:  el.data().indication,
            indicationStr: el.data().indication == Indications.fail ? "חרג בזמן" : "",
            comment: el.data().comment,
            indicationColor:  el.data().indication == Indications.fail ? "rgba(255,128,171,.4)" :  el.data().indication == Indications.pending ? "rgb(255,255,153)" :  el.data().indication== Indications.successfull ? "rgba(0,200,0,.4)" : "white",
            arrivedToOffice:  el.data().arrivedToOffice
          };
          reportsArr.push(tempElem);
        })
        
        this.firestore.collection("customers", ref => ref.where("customerId", "in", customerIds))
        .get().pipe(map(actions => {
          actions.forEach(el=>{
            let reportEl = reportsArr.find(r => r.customerID == el.data().customerId);
            if(reportEl){
              reportEl.companyName = el.data().companyName;
              reportEl.companyEmail = el.data().contact.email;
            }
          })
          
        })).subscribe(res => {})
        return reportsArr;
      }))
    )


    // let filteredReports = this.reports.filter(report =>
    //   (customerId == customerId || customerId == undefined || customerId == null) &&
    //   (dateFilter.startDate == null || dateFilter.startDate == undefined || (report.reportDate >= dateFilter.startDate && report.reportDate <= dateFilter.endDate)) &&
    //   (status == status || status == undefined || status == null)).sort((a, b) => {
    //     return <any>new Date(b.reportDate) - <any>new Date(a.reportDate);
    //   });
    // )
    // return this.mapReportsToCustomerReports(filteredReports, this.getAllCustomers());
  }



  checkIfCustomerReportExist(customerIdArr: string[]) {
    let currDate = new Date();
    let firstDay = new Date(currDate.getFullYear(), currDate.getMonth(), 1).getTime();
    let endDay = new Date(currDate.getFullYear(), currDate.getMonth() + 1, -1).getTime();
    return (
      this.firestore
        .collection("reports", ref => ref.where('creatDate', '>=', firstDay).where('creatDate', '<=', endDay))
        .get()
        .pipe(
          map(actions => {
            let noReportCustomerIds = [];

            if (actions.empty) {
              return customerIdArr;
            }
            else {
              for (let i of customerIdArr) {
                let appear = false;
                actions.forEach(el => {
                  if (el.data().customerId == i) {
                    appear = true;
                  }
                })
                if (appear == false) {
                  noReportCustomerIds.push(i);
                }
              }

              return noReportCustomerIds;
            }
          })
        )


    )
  }
  getReportById(reportId: number) {
    let customerReportData = this.reports.find(r => r.id == reportId);
    if (customerReportData) {
      let customerData = this.customers.find(c => c.businessId == customerReportData.customerId);
      if (customerData) {
        let reportCustomerModel: CustomerReportModel = {
          reportID: customerReportData.id,
          arrivedToOffice: customerReportData.arrivedToOffice,
          customerID: customerData.businessId,
          companyName: customerData.companyName,
          companyEmail: null,
          date: customerReportData.reportDate,
          statusNum: customerReportData.status,
          status: this.statuses.find(s => s.id == customerReportData.status).name,
          indication: customerReportData.indication,
          indicationStr: customerReportData.indication == Indications.fail ? "חרג בזמן" : "",
          comment: customerReportData.comment,
          indicationColor: customerReportData.indication == Indications.fail ? "rgba(255,128,171,.4)" : customerReportData.indication == Indications.pending ? "rgb(255,255,153)" : customerReportData.indication == Indications.successfull ? "rgba(0,200,0,.4)" : "white",
          dateStr: customerReportData.reportDate.getMonth() + 1 + '.' + customerReportData.reportDate.getFullYear()
        }
        return reportCustomerModel;
      }
    }
    return null;
  }

  mapReportsToCustomerReports(reports: reports[], customers: customer[]) {
    let customersReports: CustomerReportModel[] = [];
    if (reports && customers) {
      for (let report of reports) {
        let currentUser = customers.find(c => c.businessId == report.customerId);
        if (currentUser) {
          customersReports.push({
            reportID: report.id,
            customerID: currentUser.businessId,
            arrivedToOffice: report.arrivedToOffice,
            companyName: currentUser.companyName,
            companyEmail: null,
            date: report.reportDate,
            statusNum: report.status,
            status: this.statuses.find(s => s.id == report.status).name,
            indication: report.indication,
            indicationStr: report.indication == Indications.fail ? "חרג בזמן" : "",
            comment: report.comment,
            indicationColor: report.indication == Indications.fail ? "rgba(255,128,171,.4)" : report.indication == Indications.pending ? "rgb(255,255,153)" : report.indication == Indications.successfull ? "rgba(0,200,0,.4)" : "white",
            dateStr: report.reportDate.getMonth() + 1 + '.' + report.reportDate.getFullYear()
          });
        }
      }
    }
    return customersReports;
  }

  getAllCustomers() {
    if (this.customers) {
      return this.customers.slice();
    }
  }


  createReportForCustomersByLastMonth(customersIdArray) {
    return Observable.create((observer: Observer<ApiResult>) => {
      let result: ApiResult;
      let reportsCustomersArray;
      let newReport: reports[] = [];
      this.checkIfCustomerReportExist(customersIdArray).subscribe(res => {
        for (let el of res) {

          newReport.push({
            id: null,
            customerId: el,
            status: Statuses.notStarted,
            indication: Indications.pending,
            reportDate: new Date(),
            creatDate: (new Date()).getTime(),
            comment: null,
            isActive: true,
            lease: null,
            actualDownPaymentsFee: null,
            salariesVat: null,
            deductions: null,
            deductionsFee: null,
            downPaymentPercentage: null,
            downPaymentsCycleFee: null,
            addedValueFee: null,
            addedValueKFee: null,
            arrivedToOffice: null,
            workers: null,
            exemptCapitalCycleFee: null,
            exemptCycleFee: null,
            reportHandler: null,
            reportEndDate: null,
            reportLastChangeDate: null,
            reportNumber: null,
            reportStartDate: null,
            requiredCapitalCycleFee: null,
            requiredCycleVal: null,
            totalContractors: null,
            totalDeductions: null,
            incomeTaxDeductions: null,
            incomeTaxDeductionsDate: null,
            incomeTaxDeductionsPeriodType: null,
            incomeTaxDeductionsVal: null,
            incomeTaxDownPaymentAppointedDate: null,
            incomeTaxDownPaymentsPeriodType: null,
            incomeTaxDownPaymentsVal: null,
            incomeTaxSalaries: null,
            incomeTaxWorkers: null,
            generalCycleVat: null,
            generalRequiredCycleFee: null,
            leasePaymentPeriodType: null,
            leaseVal: null,
            leaseVat: null,
            calculatedDownPayment: null,
            contractors: null,
            contractorsEmployerPeriodType: null,
            contractorsVal: null,
            contractorsVat: null,
            vatAppointedDate: null,
            vatPayment: null,
            vatReportPeriodType: null,
            vatValue: null,
            nationalInsuranceDeductionsPeriodType: null,
            nationalInsuranceDeductionsVal: null,
            nationalInsuranceDownPaymentsPeriodType: null,
            nationalInsuranceDownPaymentsVal: null
          });
        }
        for (let report of newReport) {
          this.firestore.collection("reports")
            .add(report)
            .then(ref => {
              ref.set({
                id: ref.id
              }, { merge: true })
                .then(
                  ref => {

                  }
                )
            })
        }
      })


      result = { data: newReport, success: true, message: 'לקוח התווסף בהצלחה' }
      observer.next(result);
      observer.complete();
    });


  }



  // getFullCustomersDetails() {
  //   if (this.customers) {
  //     if (this.contacts) {
  //       let fullModel: FullCustomerModel[] = [];
  //       for (let customer of this.customers) {
  //         fullModel.push(
  //           {
  //             customer: customer,
  //             contact: this.contacts.find(c => c.customerId == customer.businessId),
  //             newCustomerId: null,
  //             clickableAdd: false,
  //             clickableDelete: true,
  //             displayAdd: false,
  //             displayDelete: true,
  //             displayEdit: true,
  //             clickableEdit: true
  //           }
  //         );
  //       }
  //       return fullModel;
  //     }
  //     else {
  //       let fullModel: FullCustomerModel[] = [];
  //       for (let customer of this.customers) {
  //         fullModel.push(
  //           {
  //             customer: customer,
  //             contact: null,
  //             newCustomerId: null,
  //             clickableAdd: false,
  //             clickableDelete: true,
  //             displayAdd: false,
  //             displayDelete: true,
  //             displayEdit: true,
  //             clickableEdit: true
  //           }
  //         );
  //       }
  //       return fullModel;
  //     }
  //   }
  // }

  getAllStatuses() {
    if (this.statuses) {
      return this.statuses.slice();
    }
  }

  updateCustomer(customer: customer, contact: contact, newCustomerId: string = null) {
    let currentCustomer = this.customers.find(c => c.businessId == customer.businessId);
    if (currentCustomer) {
      currentCustomer.companyName = customer.companyName;
      let currentCustomerContact = this.contacts.find(c => c.id == customer.contactID);
      if (currentCustomerContact) {
        currentCustomerContact.email = contact.email;
        currentCustomerContact.city = contact.city;
        currentCustomerContact.building = contact.building;
        currentCustomerContact.phone = contact.phone;
        currentCustomerContact.street = contact.street;
        currentCustomerContact.imgUrl = contact.imgUrl;
        if (newCustomerId != null) {
          currentCustomer.businessId = newCustomerId;
          currentCustomerContact.customerId = newCustomerId;
        }
      }
      else {
        //get latest contact id and increment by one to add contact
        let newContactId = Math.max.apply(Math, this.contacts.map(function (e) { return e.id })) + 1;
        let newContact: contact = { id: newContactId, imgUrl: '', building: contact.building, city: contact.city, phone: contact.phone, street: contact.street, email: contact.email, customerId: newCustomerId == null ? customer.businessId : newCustomerId, isActive: true };
        this.contacts.push(newContact);
      }
      return { data: { customer: currentCustomer, contact: contact }, message: "לקוח עודכן בהצלחה" };
    }
    else {
      return { data: { customer: customer, contact: contact }, message: "לקוח לא קיים במערכת" };
      return "לקוח לא קיים במערכת";
    }
  }

  // addCustomer(customer: customer, contact: contact) {
  //   //get incremental id from contacts
  //   let newContactId = Math.max.apply(Math, this.contacts.map(function (e) { return e.id })) + 1;
  //   if (newContactId) {
  //     let newCustomer: customer = { businessId: customer.businessId, contactID: newContactId, companyName: customer.companyName, isActive: true, createdDate: new Date() };
  //     let newContact: contact = { id: newContactId,imgUrl: '', customerId: customer.businessId, city: contact.city, phone: contact.phone, email: contact.email, street: contact.street, building: contact.building };
  //     this.customers.push(newCustomer);
  //     this.contacts.push(newContact);
  //     return { data: { customer: newCustomer, contact: newContact }, message: "לקוח נשמר בהצלחה" };
  //   }
  //   else {
  //     return { data: null, message: "אירעה שגיאה בשמירת לקוח חדש" };
  //   }
  // }

  deleteCustomer(customer: customer) {
    let currentCustomer = this.customers.findIndex(c => c.businessId == customer.businessId);
    if (currentCustomer != undefined) {
      //set contact to inactive
      let customerContact = this.contacts.findIndex(c => c.customerId == customer.businessId);
      if (customerContact != undefined) {
        //customerContact.isActive = false;
        this.contacts.splice(customerContact, 1);
      }
      //set all reports to inactive
      let customerReports = this.reports.filter(r => r.customerId == customer.businessId);
      if (customerReports) {
        for (let report of customerReports) {
          // isActive = false;  
          this.reports.splice(customerReports.indexOf(report), 1);
        }
      }
      //set user to inactive
      //currentCustomer.isActive = false;
      this.customers.splice(currentCustomer, 1);
      return { data: null, message: "לקוח נמחק בהצלחה" };
    }
    else {
      return { data: null, message: "אירעה שגיאה בעת מחיקת לקוח" };
    }
  }

  updateArriveToOffice(reportId: number, newFlag) {
    //add arrivetooffice
    let report = this.reports.find(r => r.id == reportId);
    if (newFlag == true) {
      if (report) {
        report.arrivedToOffice = new Date();
        return { data: report, message: 'עודכן בהצלחה' };
      }
      else {
        return { data: null, message: 'אירעה שגיאה' };
      }
    }
    else {
      if (report) {
        report.arrivedToOffice = null;
        return { data: report, message: 'עודכן בהצלחה' };
      }
      else {
        return { data: null, message: 'אירעה שגיאה' };
      }
    }
  }

  getFullReportsDetails() {
    // let ReportCustomerId;
    // let reportsArr: ReportDetailsModel[] = [];
    return (
      this.firestore
        .collection("reports")
        .get()
        .pipe(map(actions => {
          actions.forEach(el => {

          })
        }))

    )
  }

  updateReports(reportId: string, reportData: ReportDetailsModel) {
    let result: ApiResult;

    return Observable.create((observer: Observer<ApiResult>) => {
      this.firestore.collection('reports')
        .doc(reportId)
        .update(reportData)
        .then(
          res => {
            result = { data: reportData, success: true, message: 'עדכון הדיווח התבצע בהצלחה' };
            observer.next(result);
            observer.complete();
          }
        )

    });

  }

}
