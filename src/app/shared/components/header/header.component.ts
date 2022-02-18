import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() isToggleSidebar = new EventEmitter<boolean>();
  faBars = faBars;
  faXMark = faXmark;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isToggleSidebar.emit(true);
  }
}
