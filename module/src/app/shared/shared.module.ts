import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDividerComponent } from './title-divider/title-divider.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    TitleDividerComponent,
    ItemListComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleDividerComponent,
    ItemListComponent,
    ModalComponent
  ]
})
export class SharedModule { }
