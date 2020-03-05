import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerReportModel } from '../models/customerReportModel';
import { DateFilterModel } from '../models/dateFilterModel';
import { customer } from '../models/customer';
import { reports } from '../models/report';
import { Indications, Statuses } from '../Utils/Enums'
import { contact } from '../models/contact';
import { FullCustomerModel } from '../models/fullCustomerModel';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  customersReportsModelSubject = new Subject<CustomerReportModel[]>();
  // customersModelSubject = new Subject<>();
  private customers: customer[] = [{
    id: "1",
    companyName: "חברה בצפון",
    contactID: 1,
    isActive: true,
    createdDate: new Date()
  },
  {
    id: "2",
    companyName: "אמין בע''ם",
    contactID: 2,
    isActive: true,
    createdDate: new Date()
  },
  {
    id: "3",
    companyName: "קודידו בע''ם",
    contactID: 3,
    isActive: true,
    createdDate: new Date()
  }
  ];

  private contacts: contact[] = [
      {
        id: 1,
        customerId: "1",
        city: "חיפה",
        street: "רחוב נשר",
        building: "14",
        phone: "05234454677",
        email: "tsafon@tsafon.com"
      },
      {
        id: 2,
        customerId: "2",
        city: "תל אביב",
        street: "רחוב תל",
        building: "7",
        phone: "0526154677",
        email: "merkaz@merka.com"
      },
      {
        id: 3,
        customerId: "3",
        city: "אילת",
        street: "רחוב אילת",
        building: "2",
        phone: "05234454677",
        email: "eilat@ee.com"
      },
  ]

  private reports: reports[] = [{
    id: 1,
    customerId: "1",
    reportDate: new Date,
    creatDate: new Date,
    status: +Statuses.working,
    indication: 1,
    comment: "חסרים דיווחי משכורות"
  },
  {
    id: 2,
    customerId: "2",
    reportDate: new Date,
    creatDate: new Date,
    status: +Statuses.working,
    indication: 1,
    comment: "חסרים דיווחי משכורות"
  },
  {
    id: 3,
    customerId: "3",
    reportDate: new Date,
    creatDate: new Date,
    status: +Statuses.notStarted,
    indication: 1,
    comment: "חסרים דיווחי משכורות"
  },
  {
    id: 4,
    customerId: "1",
    reportDate: new Date,
    creatDate: new Date,
    status: +Statuses.finished,
    indication: 3,
    comment: "חסרים דיווחי משכורות"
  }
  ];

  statuses = [
    {
      id: 1,
      name: "בעבודה"
    },
    {
      id: 2,
      name: "לר הותחל"
    },
    {
      id: 3,
      name:"הסתיים"
    }];

  constructor() { }

  getCustomersReports(dateFilter: DateFilterModel, customerId: string, status: number){
    //bring all reports
    if(!dateFilter)
      dateFilter = new DateFilterModel();
    let filteredReports = this.reports.filter(report => 
      (report.customerId == customerId || customerId == undefined || customerId == null) &&
      (dateFilter.startDate == null || dateFilter.startDate == undefined || (report.reportDate >= dateFilter.startDate && report.reportDate <= dateFilter.endDate))&&
      (report.status == status || status == undefined || status == null)).sort((a, b) => {
        return <any>new Date(b.reportDate) - <any>new Date(a.reportDate);
      });
    
    return this.mapReportsToCustomerReports(filteredReports, this.getAllCustomers());
  }

  mapReportsToCustomerReports(reports: reports[], customers: customer[]){
    let customersReports: CustomerReportModel[] = [];
    if(reports && customers){
      for(let report of reports){
        let currentUser = customers.find(c => c.id == report.customerId);
        if(currentUser){
          customersReports.push({
            reportID: report.id,
            customerID: currentUser.id,
            companyName: currentUser.companyName,
            companyEmail: null,
            date: report.reportDate,
            statusNum: report.status,
            status: this.statuses.find(s => s.id == report.status).name,
            indication: report.indication,
            indicationStr: report.indication == 3 ? "חרג בזמן": "",
            comment: report.comment
          });
        }
      }
    }
    return customersReports;
  }

  getAllCustomers(){
    if(this.customers){
      return this.customers.slice();
    }
  }

  getFullCustomersDetails(){
    if(this.customers){
      if(this.contacts){
        let fullModel: FullCustomerModel[] = [];
        for(let customer of this.customers){
          fullModel.push(
            {
              customer: customer,
              contact: this.contacts.find(c => c.customerId == customer.id)
            }
          );
        }
        return fullModel;
      }
      else{
        let fullModel: FullCustomerModel[] = [];
        for(let customer of this.customers){
          fullModel.push(
            {
              customer: customer,
              contact: null
            }
          );
        }
        return fullModel;
      }
    }
  }

  getAllStatuses(){
    if(this.statuses){
      return this.statuses.slice();
    }
  }

  updateCustomer(customer: customer, contact: contact){
    let currentCustomer = this.customers.find(c => c.id == customer.id);
    if(currentCustomer){
      currentCustomer.companyName = customer.companyName;
      let currentCustomerContact = this.contacts.find(c => c.id == customer.contactID);
      if(currentCustomerContact){
        currentCustomerContact.email = contact.email;
        currentCustomerContact.city = contact.city;
        currentCustomerContact.building = contact.building;
        currentCustomerContact.phone = contact.phone;
        currentCustomerContact.street = contact.street;
      }
      else{
        //get latest contact id and increment by one to add contact
        let newContactId = Math.max.apply(Math, this.contacts.map(function(e) { return e.id })) + 1;
        let newContact: contact = { id: newContactId,building: contact.building, city: contact.city, phone: contact.phone, street: contact.street, email: contact.email, customerId: customer.id };
        this.contacts.push(newContact);
      }
      return { data: {customer: customer, contact: contact}, message: "לקוח עודכן בהצלחה"};
    }
    else{
      return { data: {customer: customer, contact: contact}, message: "לקוח לא קיים במערכת"};
      return "לקוח לא קיים במערכת";
    }
  }

  addCustomer(customer: customer, contact: contact){
    let newCustomerId = (Math.max.apply(Math, this.customers.map(function(e) { return +e.id })) + 1) + '';
    let newContactId = Math.max.apply(Math, this.contacts.map(function(e) { return e.id })) + 1;
    if(newCustomerId && newContactId){
      let newCustomer: customer = { id: newCustomerId, contactID: newContactId, companyName: customer.companyName, isActive: true, createdDate: new Date() };
      let newContact: contact = { id: newContactId, customerId: newCustomerId,city: contact.city, phone: contact.phone, email: contact.email, street: contact.street, building: contact.building };
      this.customers.push(newCustomer);
      this.contacts.push(newContact);
      return { data: {customer: newCustomer, contact: newContact}, message: "לקוח נשמר בהצלחה"};
    }
    else{
      return { data: null, message: "אירעה שגיאה בשמירת לקוח חדש"};
    }
  }
}
