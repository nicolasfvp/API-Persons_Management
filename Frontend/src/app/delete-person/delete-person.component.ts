import { Component } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrl: './delete-person.component.css'
})


export class DeletePersonComponent {
  cpf: string = '';
  id: string = '';
  modalOpened: boolean = false;

  constructor(private personService: PersonService) {}

  getPersonsByCpf(): void {
    this.personService.getPersonsByCpf(this.cpf).subscribe(person => {
      if (!this.modalOpened) {
        const modal = document.getElementById('deleteConfirmationModal');
        if (modal) {
          modal.classList.add('show'); 
          modal.setAttribute('style', 'display: block');
          this.modalOpened = true;
        }
      }
      this.id = person._id;


    }, error => {
      console.error('Erro ao buscar pessoa:', error);
    });
  }
  deletePerson(){
    this.personService.deletePerson(this.id).subscribe(()=>{

    })
  }
}
