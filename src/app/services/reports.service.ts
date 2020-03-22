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
    let startDate = dateFilter.startDate.getTime();
    let endDate = dateFilter.endDate.getTime()
    let collectionRef: AngularFirestoreCollection;
    if (customerId != null || customerId != undefined) {
      if (dateFilter != null || dateFilter != undefined) {
        if (status != null || status != undefined) {
          collectionRef = this.firestore.collection("reports", ref =>
            ref.where("customerId", "==", customerId)
              .where("status", "==", status)
              .where('createDateNum', '>=', startDate)
              .where('createDateNum', '<=', endDate))
        }
        else {
          collectionRef = this.firestore.collection("reports", ref =>
            ref.where("customerId", "==", customerId)
              .where('createDateNum', '>=', startDate)
              .where('createDateNum', '<=', endDate))
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
              .where('createDateNum', '>=', startDate)
              .where('createDateNum', '<=', endDate))
        } else {
          collectionRef = this.firestore.collection("reports", ref =>
            ref.where('createDateNum', '>=', startDate)
              .where('createDateNum', '<=', endDate))

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
          let d = new Date(el.data().createDateNum);
          customerIds.push(el.data().customerId);
          let tempElem = {
            reportID: el.data().id,
            customerID: el.data().customerId,
            companyName: null,
            companyEmail: null,
            date: d,
            dateStr: d.getMonth() + 1 + '.' + d.getFullYear(),
            status: this.statuses.find(s => s.id == el.data().status).name,
            statusNum: el.data().status,
            indication: el.data().indication,
            indicationStr: el.data().indication == Indications.fail ? "חרג בזמן" : "",
            comment: el.data().comment,
            indicationColor: el.data().indication == Indications.fail ? "rgba(255,128,171,.4)" : el.data().indication == Indications.pending ? "rgb(255,255,153)" : el.data().indication == Indications.successfull ? "rgba(0,200,0,.4)" : "white",
            arrivedToOffice: el.data().arrivedToOfficeNum != null ? new Date(el.data().arrivedToOfficeNum) : null
          };
          reportsArr.push(tempElem);
        })

        this.firestore.collection("customers", ref => ref.where("customerId", "in", customerIds))
          .get().pipe(map(actions => {
            actions.forEach(el => {
              let reportEl = reportsArr.find(r => r.customerID == el.data().customerId);
              if (reportEl) {
                reportEl.companyName = el.data().companyName;
                reportEl.companyEmail = el.data().contact.email;
              }
            })

          })).subscribe(res => { })
        return reportsArr;
      }))
    )
  }



  checkIfCustomerReportExist(customerIdArr: string[]) {
    let currDate = new Date();
    let firstDay = new Date(currDate.getFullYear(), currDate.getMonth(), 1).getTime();
    let endDay = new Date(currDate.getFullYear(), currDate.getMonth() + 1, -1).getTime();
    return (
      this.firestore
        .collection("reports", ref => ref.where('createDateNum', '>=', firstDay).where('createDateNum', '<=', endDay))
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
    return (
      this.firestore.collection("reports", ref => ref.where("id", "==", reportId))
        .get().pipe(
          map(actions => {
            let reportModel: reports;
            actions.forEach(el => {
              reportModel = {
                id: el.data().id,
                customerId: el.data().customerId,
                status: el.data().status,
                indication: el.data().indication,
                reportDate: new Date(el.data().reportDateNum),
                createDate: new Date(el.data().createDateNum),
                comment: el.data().comment,
                isActive: el.data().isActive,
                lease: el.data().lease,
                actualDownPaymentsFee: el.data().actualDownPaymentsFee,
                salariesVat: el.data().salariesVat,
                deductions: el.data().deductions,
                deductionsFee: el.data().deductionsFee,
                downPaymentPercentage: el.data().downPaymentPercentage,
                downPaymentsCycleFee: el.data().downPaymentsCycleFee,
                addedValueFee: el.data().addedValueFee,
                addedValueKFee: el.data().addedValueKFee,
                arrivedToOffice: el.data().arrivedToOfficeNum != null ? new Date(el.data().arrivedToOfficeNum) : null,
                workers: el.data().workers,
                exemptCapitalCycleFee: el.data().exemptCapitalCycleFee,
                exemptCycleFee: el.data().exemptCycleFee,
                reportHandler: el.data().reportHandler,
                reportEndDate: el.data().reportEndDateNum != null ? new Date(el.data().reportEndDateNum) : null,
                reportLastChangeDate: el.data().reportLastChangeDateNum != null ? new Date(el.data().reportLastChangeDateNum) : null,
                reportNumber: el.data().reportNumber,
                reportStartDate: el.data().reportStartDateNum != null ? new Date(el.data().reportStartDateNum) : null,
                pcnRequirement: el.data().pcnRequirement,
                pcnReportDate: el.data().pcnReportDate != null ? new Date(el.data().reportStartDateNum) : null,
                pcnReportDateNum: el.data().pcnReportDateNum,
                requiredCapitalCycleFee: el.data().requiredCapitalCycleFee,
                requiredCycleVal: el.data().requiredCycleVal,
                totalContractors: el.data().totalContractors,
                totalDeductions: el.data().sttotalDeductionsatus,
                incomeTaxDeductions: el.data().incomeTaxDeductions,
                incomeTaxDeductionsDate: el.data().incomeTaxDeductionsDateNum != null ? new Date(el.data().incomeTaxDeductionsDateNum) : null,
                incomeTaxDeductionsPeriodType: el.data().incomeTaxDeductionsPeriodType,
                incomeTaxDeductionsVal: el.data().incomeTaxDeductionsVal,
                incomeTaxDownPaymentAppointedDate: el.data().incomeTaxDownPaymentAppointedDateNum != null ? new Date(el.data().incomeTaxDownPaymentAppointedDateNum) : null,
                incomeTaxDownPaymentsPeriodType: el.data().incomeTaxDownPaymentsPeriodType,
                incomeTaxDownPaymentsVal: el.data().incomeTaxDownPaymentsVal,
                incomeTaxSalaries: el.data().stincomeTaxSalariesatus,
                incomeTaxWorkers: el.data().incomeTaxWorkers,
                generalCycleVat: el.data().generalCycleVat,
                generalRequiredCycleFee: el.data().generalRequiredCycleFee,
                leasePaymentPeriodType: el.data().leasePaymentPeriodType,
                leaseVal: el.data().leaseVal,
                leaseVat: el.data().leaseVat,
                calculatedDownPayment: el.data().calculatedDownPayment,
                contractors: el.data().contractors,
                contractorsEmployerPeriodType: el.data().contractorsEmployerPeriodType,
                contractorsVal: el.data().contractorsVal,
                contractorsVat: el.data().contractorsVat,
                vatAppointedDate: el.data().vatAppointedDateNum != null ? new Date(el.data().vatAppointedDateNum) : null,
                vatPayment: el.data().vatPayment,
                vatReportPeriodType: el.data().vatReportPeriodType,
                vatValue: el.data().vatValue,
                nationalInsuranceDeductionsPeriodType: el.data().nationalInsuranceDeductionsPeriodType,
                nationalInsuranceDeductionsVal: el.data().nationalInsuranceDeductionsVal,
                nationalInsuranceDownPaymentsPeriodType: el.data().nationalInsuranceDownPaymentsPeriodType,
                nationalInsuranceDownPaymentsVal: el.data().nationalInsuranceDownPaymentsVal
              }
            })
            return reportModel;
          })
        )
    )
  }

  // mapReportsToCustomerReports(reports: reports[], customers: customer[]) {
  //   let customersReports: CustomerReportModel[] = [];
  //   if (reports && customers) {
  //     for (let report of reports) {
  //       let currentUser = customers.find(c => c.businessId == report.customerId);
  //       if (currentUser) {
  //         customersReports.push({
  //           reportID: report.id,
  //           customerID: currentUser.businessId,
  //           arrivedToOffice: report.arrivedToOffice,
  //           companyName: currentUser.companyName,
  //           companyEmail: null,
  //           date: report.reportDate,
  //           statusNum: report.status,
  //           status: this.statuses.find(s => s.id == report.status).name,
  //           indication: report.indication,
  //           indicationStr: report.indication == Indications.fail ? "חרג בזמן" : "",
  //           comment: report.comment,
  //           indicationColor: report.indication == Indications.fail ? "rgba(255,128,171,.4)" : report.indication == Indications.pending ? "rgb(255,255,153)" : report.indication == Indications.successfull ? "rgba(0,200,0,.4)" : "white",
  //           dateStr: report.reportDate.getMonth() + 1 + '.' + report.reportDate.getFullYear()
  //         });
  //       }
  //     }
  //   }
  //   return customersReports;
  // }

  // getAllCustomers() {
  //   if (this.customers) {
  //     return this.customers.slice();
  //   }
  // }


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
            reportDateNum: (new Date()).getTime(),
            createDateNum: (new Date()).getTime(),
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
            arrivedToOfficeNum: null,
            workers: null,
            exemptCapitalCycleFee: null,
            exemptCycleFee: null,
            reportHandler: null,
            reportEndDateNum: null,
            reportLastChangeDateNum: null,
            reportNumber: null,
            reportStartDateNum: null,
            pcnRequirement: null,
            pcnReportDate: null,
            pcnReportDateNum: null,
            requiredCapitalCycleFee: null,
            requiredCycleVal: null,
            totalContractors: null,
            totalDeductions: null,
            incomeTaxDeductions: null,
            incomeTaxDeductionsDateNum: null,
            incomeTaxDeductionsPeriodType: null,
            incomeTaxDeductionsVal: null,
            incomeTaxDownPaymentAppointedDateNum: null,
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
            vatAppointedDateNum: null,
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

  // updateCustomer(customer: customer, contact: contact, newCustomerId: string = null) {
  //   let currentCustomer = this.customers.find(c => c.businessId == customer.businessId);
  //   if (currentCustomer) {
  //     currentCustomer.companyName = customer.companyName;
  //     let currentCustomerContact = this.contacts.find(c => c.id == customer.contactID);
  //     if (currentCustomerContact) {
  //       currentCustomerContact.email = contact.email;
  //       currentCustomerContact.city = contact.city;
  //       currentCustomerContact.building = contact.building;
  //       currentCustomerContact.phone = contact.phone;
  //       currentCustomerContact.street = contact.street;
  //       currentCustomerContact.imgUrl = contact.imgUrl;
  //       if (newCustomerId != null) {
  //         currentCustomer.businessId = newCustomerId;
  //         currentCustomerContact.customerId = newCustomerId;
  //       }
  //     }
  //     else {
  //       //get latest contact id and increment by one to add contact
  //       let newContactId = Math.max.apply(Math, this.contacts.map(function (e) { return e.id })) + 1;
  //       let newContact: contact = { id: newContactId, imgUrl: '', building: contact.building, city: contact.city, phone: contact.phone, street: contact.street, email: contact.email, customerId: newCustomerId == null ? customer.businessId : newCustomerId, isActive: true };
  //       this.contacts.push(newContact);
  //     }
  //     return { data: { customer: currentCustomer, contact: contact }, message: "לקוח עודכן בהצלחה" };
  //   }
  //   else {
  //     return { data: { customer: customer, contact: contact }, message: "לקוח לא קיים במערכת" };
  //     return "לקוח לא קיים במערכת";
  //   }
  // }

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

  // deleteCustomer(customer: customer) {
  //   let currentCustomer = this.customers.findIndex(c => c.businessId == customer.businessId);
  //   if (currentCustomer != undefined) {
  //     //set contact to inactive
  //     let customerContact = this.contacts.findIndex(c => c.customerId == customer.businessId);
  //     if (customerContact != undefined) {
  //       //customerContact.isActive = false;
  //       this.contacts.splice(customerContact, 1);
  //     }
  //     //set all reports to inactive
  //     let customerReports = this.reports.filter(r => r.customerId == customer.businessId);
  //     if (customerReports) {
  //       for (let report of customerReports) {
  //         // isActive = false;  
  //         this.reports.splice(customerReports.indexOf(report), 1);
  //       }
  //     }
  //     //set user to inactive
  //     //currentCustomer.isActive = false;
  //     this.customers.splice(currentCustomer, 1);
  //     return { data: null, message: "לקוח נמחק בהצלחה" };
  //   }
  //   else {
  //     return { data: null, message: "אירעה שגיאה בעת מחיקת לקוח" };
  //   }
  // }

  updateArriveToOffice(reportId: string, newFlag) {
    let result: ApiResult;
    let arrivedToOfficeValue: number;
    if (newFlag == true) {
      arrivedToOfficeValue = new Date().getTime();
    }
    else {
      arrivedToOfficeValue = null;

    }
    return Observable.create((observer: Observer<ApiResult>) => {
      this.firestore.collection('reports')
        .doc(reportId)
        .set({ arrivedToOfficeNum: arrivedToOfficeValue }, { merge: true })
        .then(
          res => {
            result = { data: newFlag, success: true, message: 'עדכון הדיווח התבצע בהצלחה' };
            observer.next(result);
            observer.complete();
          })
    })

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
