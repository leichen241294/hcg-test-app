import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailDialogComponent } from './components/detail-dialog/detail-dialog.component';
import { TypeTagComponent } from './components/type-tag/type-tag.component';
import { CapitalizePipe } from '../pipes/capitalize/capitalize.pipe';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlicePipe } from '../pipes/slice-array/slice.pipe';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  DetailDialogComponent,
  TypeTagComponent,
  CarouselComponent
]

const PIPES = [
  CapitalizePipe,
  SlicePipe
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES
  ],
  entryComponents: [
    DetailDialogComponent
  ]
})
export class SharedModule { }
