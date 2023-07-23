import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDividerComponent } from './title-divider/title-divider.component';
import { ItemListComponent } from './item-list/item-list.component';



@NgModule({
  declarations: [
    TitleDividerComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleDividerComponent,
    ItemListComponent
  ]
})
export class SharedModule { }
