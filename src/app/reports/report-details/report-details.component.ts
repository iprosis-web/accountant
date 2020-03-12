import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ReportsService } from "../../services/reports.service";
import { CustomerReportModel } from "src/app/models/customerReportModel";

@Component({
  selector: "app-report-details",
  templateUrl: "./report-details.component.html",
  styleUrls: ["./report-details.component.css"]
})
export class ReportDetailsComponent implements OnInit {
  reportId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.reportId = params["id"];
      console.log(params);
    });
  }
}
