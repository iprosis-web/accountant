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
import { AngularFirestore } from '@angular/fire/firestore';
import { ApiResult } from '../models/apiResult';
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

  constructor(private fireStore: AngularFirestore) { }

  getCustomersReports(dateFilter: DateFilterModel, customerId: string, status: number) {
    //bring all reports
    if (dateFilter == null || dateFilter == undefined) {
      dateFilter = new DateFilterModel();
    }
    this.dateFilter = dateFilter;
    this.customerId = customerId;
    this.status = status;
    let filteredReports = this.reports.filter(report =>
      (report.customerId == customerId || customerId == undefined || customerId == null) &&
      (dateFilter.startDate == null || dateFilter.startDate == undefined || (report.reportDate >= dateFilter.startDate && report.reportDate <= dateFilter.endDate)) &&
      (report.status == status || status == undefined || status == null)).sort((a, b) => {
        return <any>new Date(b.reportDate) - <any>new Date(a.reportDate);
      });

    return this.mapReportsToCustomerReports(filteredReports, this.getAllCustomers());
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
    console.log(currentCustomer);
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
          //report.isActive = false;  
          this.reports.splice(customerReports.indexOf(report), 1);
        }
      }
      //set user to inactive
      //currentCustomer.isActive = false;
      this.customers.splice(currentCustomer, 1);
      console.log(this.customers);
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
    return (
      this.fireStore
        .collection("reports")
        .get()
    ).pipe(map(actions => {
      let reportsArr: ReportDetailsModel[] = [];
      actions.forEach(el => console.log(el.data()));
      actions.forEach(el =>
        reportsArr.push({
          fullCustomerData: el.data().fullCustomerData,
          reports: el.data().reports,
        })
      )
      return reportsArr;
    }))
  }

  updateReports(reportId: string, reportData: ReportDetailsModel) {
    let result: ApiResult;

    return Observable.create((observer: Observer<ApiResult>) => {
      this.fireStore.collection('reports')
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
