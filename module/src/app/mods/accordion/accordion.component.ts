import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() data: Array<{title: string, content: string}> = []
  openItemIndex: number = 0;

  setOpenItemIndex(index: number) {
    this.openItemIndex = index === this.openItemIndex? -1 : index;
  }
}
