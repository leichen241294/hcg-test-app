import { Component, Input, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit {
  @Input() pokemonDetail: any;
  faXmark = faXmark;
  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.activeModal.close();
  }
}
