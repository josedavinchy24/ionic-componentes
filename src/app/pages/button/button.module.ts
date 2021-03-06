import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonPageRoutingModule } from './button-routing.module';

import { ButtonPage } from './button.page';
import { CardPageRoutingModule } from '../card/card-routing.module';
import { CardPage } from '../card/card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardPageRoutingModule,
    ButtonPageRoutingModule
  ],
  declarations: [CardPage]
})
export class ButtonPageModule {}
