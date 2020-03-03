import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Input() showFilters:boolean;

  constructor() { }

  ngOnInit() {
  }

}
