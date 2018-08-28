import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-viewportinfo',
  templateUrl: './viewportinfo.component.html',
  styleUrls: ['./viewportinfo.component.css']
})
export class ViewportinfoComponent implements OnInit {

  constructor() { }

  innerWidth: number;
  outerWidth: number;
  innerHeight: number;
  outerHeight: number;
  showjs = false;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.outerWidth = window.outerWidth;
    this.innerHeight = window.innerHeight;
    this.outerHeight = window.outerHeight;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    setTimeout(() => {

      this.innerWidth = event.target.innerWidth;
      this.outerWidth = event.target.outerWidth;
      this.innerHeight = event.target.innerHeight;
      this.outerHeight = event.target.outerHeight;
    });
  }


  onFittScreenJsClicked($event) {
    this.showjs = false;
  }

  onFittScreenCssClicked($event) {
    this.showjs = true;
  }

}
