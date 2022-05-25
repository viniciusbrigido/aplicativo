import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab5PageRoutingModule } from './tab5-routing.module';
import { RouterModule } from '@angular/router';
import { Tab5Page } from './tab5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab5Page }]),
    Tab5PageRoutingModule
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
