import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  questions: Array<{title: string, content: string}> = [
    {
      title: "What in the actual fuck is this?",
      content: "Who fucking knows..."
    },
    {
      title: "What in the actual fuck is this?",
      content: "Who fucking knows..."
    },
    {
      title: "What in the actual fuck is this?",
      content: "Who fucking knows..."
    }
  ]
  showModal: boolean = false;

  onButtonClick() {
    this.showModal = !this.showModal;
  }
}
