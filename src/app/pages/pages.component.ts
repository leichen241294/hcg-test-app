import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  isToggleSidebar = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(e: boolean) {
    console.log('e', e);
    this.isToggleSidebar = e;
  }
}
