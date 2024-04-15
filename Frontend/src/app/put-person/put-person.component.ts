import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-put-person',
  templateUrl: './put-person.component.html',
  styleUrl: './put-person.component.css'
})


export class PutPersonComponent {
  cpf: string = '';


  constructor(private router: Router, private personService: PersonService) {}

  updatePerson(): void {
    this.personService.getPersonsByCpf(this.cpf).subscribe(person => {
      
      console.log('Pessoa encontrada:', person);

      return this.personService.deletePerson(person.id)
    }, error => {
      console.error('Erro ao buscar pessoa:', error);
    });
  }
}
