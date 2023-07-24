import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  questions: Array<{title: string, content: string}> = [
    {
      title: "This is the question #1?",
      content: "This is the content of the answer to question #1."
    },
    {
      title: "This is the question #2?",
      content: "This is the content of the answer to question #2."
    },
    {
      title: "This is the question #3?",
      content: "This is the content of the answer to question #3."
    },
    {
      title: "This is the question #4?",
      content: "This is the content of the answer to question #4."
    },
  ]
  showModal: boolean = false;

  onButtonClick() {
    this.showModal = !this.showModal;
  }
}
