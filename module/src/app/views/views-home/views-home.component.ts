import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  stats: Array<{value: number, label: string}> = [
    {value: 22, label: '# of Users'},
    {value: 900, label: 'Revenue'},
    {value: 50, label: 'Reviews'},
  ]

  items: Array<{imgSource: string, title: string, description: string, info: string, extraInfo: string}> = [
    { 
      imgSource: "../../../assets/img/ps5_controller.jpg",
      title: "PS5 Controller",
      description: "Playstation 5 Controller",
      info: "This is a Playstation 5 controller.",
      extraInfo: "Comes with the charging cable."
    },
    { 
      imgSource: "../../../assets/img/xbox_controller.jpg",
      title: "Xbox Series Controller",
      description: "Xbox Series Controller",
      info: "This is a Xbox Series controller.",
      extraInfo: "Comes with 2 AA batteries."
    }
  ]
}
