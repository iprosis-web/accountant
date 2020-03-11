import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ServtestService {
  constructor(private firestore: AngularFirestore) {}

  getData(id) {
    return (
      this.firestore
        .collection("dataItems", ref => ref.where("id", "==", id))
        //.collection("dataItems")
        .get()
    );
  }

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
}
