import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  template: `
    <h4>You selected Person with unique id = {{personId}}</h4>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class PersonDetailComponent implements OnInit {

  
  public personId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.personId=id;
  }

}
