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

  constructor(private service: ServtestService) {}

  ngOnInit() {}

  getData() {
    console.log("Data :", this.data);
    const id = this.data.id;
    this.service.getData(id).subscribe(res => {
      res.forEach(el => console.log("Got data by ID:", id, el.data()));
    });
  }

  postData() {
    console.log("New Data :", this.data);
    this.service
      .postData(this.data)
      .then(res => {
        console.log("Data succsesfully posted:", this.data);
      })
      .catch(err => {
        console.log("Error saving data", this.data);
      });
  }
}
