import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ServtestService {
  constructor(private firestore: AngularFirestore) {}

  // CRUD:

  //C: Create
  postData(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("dataItems")
        .add(data)
        .then(
          res => {},
          err => reject(err)
        );
    });
  }

  // R: Read
  // 1. Example1 by data range where id1 = data.id, id2 = data.name
  getData(data) {
    console.log("Service get data:::", data);
    let id1 = data.id;
    let id2 = data.name;
    return (
      this.firestore
        .collection("dataItems", ref => ref.where("id", ">", id1).where("id", "<", id2))
        //.collection("dataItems")
        .get()
    );
    }

  // R: Read
  // 2. Example1 by data range where id1 = data.id, id2 = data.name
  getDataById(id) {
    return (
      this.firestore
        .collection("dataItems", ref => ref.where("id", "==", id))
        .get()
    );
    }


    // U: Update
    updateData(id ,data) {
      return new Promise<any>((resolve, reject) => {
        this.firestore
          .collection("dataItems")
          .doc(id)
          .update(data)
          .then(
            res => {},
            err => reject(err)
          );
      });
    }

    // D: delete
    deleteData(id) {
      return new Promise<any>((resolve, reject) => {
        this.firestore
          .collection("dataItems")
          .doc(id)
          .delete()
          .then(
            res => {},
            err => reject(err)
          );
      });
    }
    

    
  
}
