import { Component, OnInit, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';


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

  documentHight: number;
  documentWidth: number;
  showjs = false;

  ngOnInit() {
    this.setSizeVaules();
  }


  setSizeVaules() {
    this.innerWidth = window.innerWidth;
    this.outerWidth = window.outerWidth;
    this.innerHeight = window.innerHeight;
    this.outerHeight = window.outerHeight;
    this.documentWidth = document.documentElement.clientWidth;
    this.documentHight = document.documentElement.clientHeight;

    this.setUpDocumentAsStatic(window.innerHeight);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    setTimeout(() => {

      this.setSizeVaules();

    });
  }

  private setUpDocumentAsStatic(windowInnerHeight: number): void {
    const vh: number = Math.max(document.documentElement.clientHeight, windowInnerHeight || 0);
    // this.rootOutletStyle = {
    //     "height.px": vh.toString(),
    //     "overflow": "hidden"
    // };

    const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
    const html: HTMLElement = document.getElementsByTagName("html")[0];
    this.setUpStaticElement(body, vh);
    this.setUpStaticElement(html, vh);
  }

  setUpStaticElement(element: HTMLElement, height: number): void {

    element.style.height = `${height}px`;
    element.style.overflow = "hidden";
  }

  // @HostListener("window:load", ["$event"])
  // onLoad(event: any): void {
  //   if (screenfull.enabled) {
  //     screenfull.request();
  //   }
  // }

  onFittScreenJsClicked($event) {
    this.showjs = false;
  }

  onFittScreenCssClicked($event) {
    this.showjs = true;
  }

  toggleFullScreen() {
    if (screenfull.enabled) {
      screenfull.request();
    }
  }

}
