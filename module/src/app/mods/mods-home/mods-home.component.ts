import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  showModal: boolean = false;

  onButtonClick() {
    this.showModal = !this.showModal;
  }
}
