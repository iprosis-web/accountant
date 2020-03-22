import { Component, OnInit } from "@angular/core";
import { ServtestService } from "../servtest.service";

@Component({
  selector: "app-testcomp",
  templateUrl: "./testcomp.component.html",
  styleUrls: ["./testcomp.component.css"]
})
export class TestcompComponent implements OnInit {
  data = {
    id: "123",
    name: "MyName"
  };

  tableData = [];

  constructor(private service: ServtestService) {}

  ngOnInit() {}

  getData() {
    const localData = this.data;
    this.service.getData(localData).subscribe(res => {
      res.forEach(el => console.log("Got data between ID:", localData.id, localData.name, el.data()));
    });
  }

  postData() {
    this.service
      .postData(this.data)
      .then(res => {
        console.log("Data succsesfully posted:", this.data);
      })
      .catch(err => {
        console.log("Error saving data", this.data);
      });
  }

  updateData () {
    let id = this.data.id; 
    let that = this;
    let newData = {name: this.data.name};
    this.service.getDataById(id).subscribe(res => {
      let elKey = res.docs[0].id;
      console.log("Node with ata  ID: will be updated", id, elKey);
      that.service
      .updateData(elKey, newData)
      .then(res => {
        console.log("Data succsesfully posted:", this.data);
      })
      .catch(err => {
        console.log("Error saving data", err);
      });
    });
  }

  deleteData () {
    let id = this.data.id; 
    let that = this;
    this.service.getDataById(id).subscribe(res => {
      let elKey = res.docs[0].id;
      console.log("Node with ata  ID: will be deleted", id, elKey);
      that.service
      .deleteData(elKey)
      .then(res => {
        console.log("Data succsesfully deleted:", this.data);
      })
      .catch(err => {
        console.log("Error deleting data", err);
      });
    });
  }
}
