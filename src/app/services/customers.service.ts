import { Injectable } from '@angular/core';
import { ReportsService } from './reports.service';
import { FullCustomerModel } from '../models/fullCustomerModel';
import { customer } from '../models/customer';
import { contact } from '../models/contact';
import { Subject, Observable, Observer } from 'rxjs';
import { map, finalize } from 'rxjs/operators'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ApiResult } from '../models/apiResult';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  allCustomers: FullCustomerModel[] = [];
  fullCustomerDetailsSubject: Subject<FullCustomerModel[]> = new Subject<FullCustomerModel[]>();
  fullCustomersData: FullCustomerModel[] = [];
  constructor(private reportService: ReportsService,
    private fireStore: AngularFirestore,private storage: AngularFireStorage) { }

  getFilteredCustomers(customerId: string, statusString:string) {
// changing status to string , adding statuses string array + changing to string in DB
    let status;
    if(statusString == null){
      status = null;
    }
    else if (statusString === 'פעיל') {
      status = true;
    }
    else {
      status = false;
    }
    let collectionRef: AngularFirestoreCollection;
    if(customerId != null || customerId != undefined){
      if(status != null || status != undefined ){
        collectionRef = this.fireStore.collection("customers", ref =>
        ref.where("customerId", "==", customerId).where("isActive", "==", status))
      }
      else{
        collectionRef = this.fireStore.collection("customers", ref =>
        ref.where("customerId", "==", customerId))
      }
    }
    else{
      if(status != null || status != undefined){
        collectionRef = this.fireStore.collection("customers", ref =>
        ref.where("isActive", "==", status))
      }
      else{
        collectionRef = this.fireStore.collection("customers")
      }
      
    }
    
    return (
      collectionRef.get().pipe( map(actions => {
        let customersArr : FullCustomerModel[] = [];

        actions.forEach(el => {
          let d = new Date(el.data().createdDate.seconds);
          let tempElem = {
            customer: el.data(),
            contact: el.data().contact,
            newCustomerId: el.id,
            displayEdit: true,
            clickableEdit: true,
            displayDelete: true,
            clickableDelete:  true,
            displayAdd: false,
            clickableAdd: false
          };
          tempElem.customer.createdDate = d;
          customersArr.push(tempElem);
        })
          console.log(this.allCustomers);
          return this.allCustomers = customersArr;
          //. filter(customer => 
          //   (customer.customer.customerId == customerId || customerId == undefined || customerId == null) &&
          //   (customer.customer.isActive == status || status == undefined || status == null)

          // )
      }))
    )
    
  }

    getFullCustomerInfoById(id: string){
      console.log('customer id serveice ' , id);
      
      // let customer = this.reportService.getFullCustomersDetails().find(c => c.customer.id === id);
      // return customer;
      return (
        this.fireStore
        .collection("customers", c => c.where("customerId", "==", id))
        .get().pipe( map(actions => {
          let customersArr : FullCustomerModel[] = [];
          actions.forEach(el => {
            let d = new Date(el.data().createdDate);
            let tempElem = {
              customer: el.data(),
              contact: el.data().contact,
              newCustomerId: el.id,
              displayEdit: true,
              clickableEdit: true,
              displayDelete: true,
              clickableDelete:  true,
              displayAdd: false,
              clickableAdd: false
            };
            tempElem.customer.createdDate = d;
            customersArr.push(tempElem);
          })
            return customersArr;
        }))
      )
    }

    getFullCustomerInfoByBusinessId(businessId: string){
      return (
        this.fireStore
        .collection("customers", c => c.where("businessId", "==", businessId))
        .get().pipe( map(actions => {
          let customersArr : FullCustomerModel[] = [];
          actions.forEach(el => {
            let d = new Date(el.data().createdDate.seconds);
            let tempElem = {
              customer: el.data(),
              contact: el.data().contact,
              newCustomerId: el.id,
              displayEdit: true,
              clickableEdit: true,
              displayDelete: true,
              clickableDelete:  true,
              displayAdd: false,
              clickableAdd: false
            };
            tempElem.customer.createdDate = d;
            customersArr.push(tempElem);
          })
            return customersArr;
        }))
      )
    }

    getFullCustomersDetails(){
      // return this.reportService.getFullCustomersDetails();
      return (
        this.fireStore
        .collection("customers")
        .get()
      ).pipe( map(actions => {
        let customersArr : FullCustomerModel[] = [];
        actions.forEach(el => {
          let d = new Date(el.data().createdDate.seconds);
          let tempElem = {
            customer: el.data(),
            contact: el.data().contact,
            newCustomerId: el.id,
            displayEdit: true,
            clickableEdit: true,
            displayDelete: true,
            clickableDelete:  true,
            displayAdd: false,
            clickableAdd: false
          };
          tempElem.customer.createdDate = d;
          customersArr.push(tempElem);
        })
          return customersArr;
      }))

    }  

    updateCustomer(customerId: string,customer: customer, file){
      let result: ApiResult;
      //check if businessId Already Exists
      return Observable.create((observer: Observer<ApiResult>) => {
        this.getFullCustomerInfoById(customerId).subscribe(res => {
          //user alredy exist with businessId id
          
          if(res != null && res.length > 0 && res[0].customer.customerId != customerId){
             result = { data: null,success: false, message: 'לקוח עם מספר עוסק כבר קיים במערכת' };
             observer.next(result);
             observer.complete();
          }
          //user can be updated
          else if(file != null){
            //first upload image
            let filePath = customer.customerId + "/images/" + file.name;
            let storageRef = this.storage.ref(filePath);
            let metadata = {
              contentType: file.type
            }
            let uploadedImgURL = null;
            let uploadTask = this.storage.upload(filePath, file, metadata);
            uploadTask.snapshotChanges().pipe(
              finalize(() => storageRef.getDownloadURL().subscribe(ref => {
                uploadedImgURL = ref;
                if(uploadedImgURL == null){
                  result = {data: customer, success: false, message: "אירעה שגיאה בשמירת תמונה"}
                  observer.next(result);
                  observer.complete();
                }
                else{
                  customer.contact.imgUrl = uploadedImgURL;
                  this.fireStore.collection("customers")
                  .doc(customerId)
                  .update(customer)
                  .then(
                    res => {
                      result = {data: customer, success: true, message: 'לקוח עודכן בהצלחה'}
                      observer.next(result);
                      observer.complete();
                    }
                  );
                }
              }))
            )
            .subscribe(ref => {
              
            })
        }
        else{
          this.fireStore.collection("customers")
          .doc(customerId)
          .update(customer)
          .then(
            res => {
              result = {data: customer, success: true, message: 'לקוח עודכן בהצלחה'}
              observer.next(result);
              observer.complete();
            }
          );
        }
      });
     });
    }

    addNewCustomer(newCustomer: customer){
       //return this.reportService.addCustomer(newCustomer, newContact);
      let result: ApiResult;
      //check if businessId Already Exists
      return Observable.create((observer: Observer<ApiResult>) => {
        this.getFullCustomerInfoByBusinessId(newCustomer.businessId).subscribe(res => {
          //user alredy exist with businessId id
          if(res.length > 0){
             result = { data: null,success: false, message: 'לקוח עם מספר עוסק כבר קיים במערכת' };
             observer.next(result);
             observer.complete();
          }
          //user can be added
          else{
            this.fireStore.collection("customers")
            .add(newCustomer)
            .then( ref => {
              newCustomer.contact.customerId = ref.id;
              ref.set({ customerId: ref.id, contact: newCustomer.contact  }, {merge: true})
              .then(
                ref => {
                  result = {data: ref, success: true, message: 'לקוח התווסף בהצלחה'}
                  observer.next(result);
                  observer.complete();
                }
              )
            })
          }
        });
      })
    }

    deleteCustomer(customerId: string,customer: customer){
      let result: ApiResult;
      //check if businessId Already Exists
      return Observable.create((observer: Observer<ApiResult>) => {
          //user can be updated
          //first delete image file then delete customer
          try{
            if(customer.contact.imgUrl != null && customer.contact.imgUrl != ""){
              let fileStorageRef = this.storage.storage.refFromURL(customer.contact.imgUrl);
              fileStorageRef.delete().then(ref => {
                this.fireStore.collection("customers")
                .doc(customerId)
                .delete()
                .then(
                  (res: any) => {
                    result = {data: res, success: true, message: 'לקוח נמחק בהצלחה'}
                    observer.next(result);
                    observer.complete();
                  }
                );
              })
            }
            else{
              //if no img then just delete user
              this.fireStore.collection("customers")
              .doc(customerId)
              .delete()
              .then(
                (res: any) => {
                  result = {data: res, success: true, message: 'לקוח נמחק בהצלחה'}
                  observer.next(result);
                  observer.complete();
                }
              );
            }
          }
          catch(er){
            result = {data: null, success: false, message: 'אירעה שגיאה במחיקת לקוח'}
            observer.next(result);
            observer.complete();
          }
     });
    }

}
