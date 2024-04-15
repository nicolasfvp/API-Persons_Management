import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-operate-person',
  templateUrl: './operate-person.component.html',
  styleUrls: ['./operate-person.component.css']
})

export class OperatePersonComponent implements OnInit {

  constructor( private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.personService.getPersons().subscribe((data: any) => {
      console.log(data);
    });
  }
}