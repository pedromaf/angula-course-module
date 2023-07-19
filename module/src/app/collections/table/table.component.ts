import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() headers: Array<{key: string, label: string}> = []
  @Input() data: Array<any> = []
}
