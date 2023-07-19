import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data: Array<{name: string, age: number, job: string}> = [
    {name: "name1", age: 24, job: "job1"},
    {name: "name2", age: 34, job: "job2"},
    {name: "name3", age: 25, job: "job3"},
    {name: "name4", age: 28, job: "job4"},
    {name: "name5", age: 52, job: "job5"},
    {name: "name6", age: 67, job: "job6"},
  ]

  headers: Array<{key: string, label: string}> = [
    {key: "name", label: "Name"},
    {key: "age", label: "Age"},
    {key: "job", label: "Job"},
  ]
}
