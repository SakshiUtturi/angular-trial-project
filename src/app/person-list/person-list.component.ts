import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-person-list',
  template: `
    
    <p (click)=onSelect(person) *ngFor="let person of persons">
  <span>{{person.name}}</span>
  </p>
  `,
  styles: [
  ]
})
export class PersonListComponent implements OnInit {

  persons = [
    {"id":112, "name": "1. sakshi"},
    {"id":113, "name": "2. neha"},
    {"id":114, "name": "3. varsh"}
  ]

  constructor(private router: Router ) {}

  ngOnInit() {
  }

  onSelect(person: { id: any; }){
    this.router.navigate(['/persons',person.id ])
  }

}
