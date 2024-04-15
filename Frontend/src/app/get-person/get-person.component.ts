import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-get-person',
  templateUrl: './get-person.component.html',
  styleUrl: './get-person.component.css'
})

export class GetPersonComponent {
  person: any = {};
  addresses: any = {};
  cpf: string = '';
  modalOpened: boolean = false;

  constructor(private router: Router, private personService: PersonService) {}

  getPersonsByCpf(): void {
    this.personService.getPersonsByCpf(this.cpf).subscribe(person => {
      this.person = person;
      this.addresses = person.addresses[0];
      if (!this.modalOpened) {
        const modal = document.getElementById('personModal');
        if (modal) {
          modal.classList.add('show'); 
          modal.setAttribute('style', 'display: block');
          this.modalOpened = true;
        }
      }
    }, error => {
      console.error('Erro ao buscar pessoa:', error);
    });
  }
  closeModal(): void {
    console.log("oi")
      const modal = document.getElementById('personModal');
      if (modal) {
        modal.classList.remove('show');
        modal.setAttribute('style', 'display: none');
        this.modalOpened = false;
      }
  }
}

