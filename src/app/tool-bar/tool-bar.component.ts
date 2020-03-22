import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) { }

  ngOnInit() {
    //match media to max-width of 1200
    this.mobileQuery = this.media.matchMedia('(max-width: 1200px)');
    //activate litsener to media to be able to listen to media changes
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
