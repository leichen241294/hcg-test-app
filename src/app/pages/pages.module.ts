import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokemonsComponent } from './pokemons/pokemons.component';


@NgModule({
  declarations: [
    HomeComponent,
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NzLayoutModule,
    NgbModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
