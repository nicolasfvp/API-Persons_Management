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

  constructor(private personService: PersonService) {}

  getPersonsByCpf(): void {
    if(this.cpf != ''){
      this.personService.getPersonsByCpf(this.cpf).subscribe({next: person => {
        this.showOrHideModal(true, "deleteConfirmationModal")
        this.id = person._id;
  
  
      }, error: ()=>{
        alert("insira um CPF válido")
      }});
    }else{
      alert("insira um CPF válido")
    }
    
  }
  deletePerson(){
    this.personService.deletePerson(this.id).subscribe({next: ()=>{
      this.showOrHideModal(false, "deleteConfirmationModal");
      this.showOrHideModal(true, "confirmationModal");
    }, error: ()=>{
      alert("erro ao deletar")
    }})
  }

  showOrHideModal(showOrHide: boolean, modalId: string){
    const modal = document.getElementById(modalId);
    if(modal){
      if(showOrHide){
        modal.classList.add('show'); 
        modal.setAttribute('style', 'display: block');
          
      }else{
        modal.classList.add('hide'); 
        modal.setAttribute('style', 'display: none');
      }
    }
  }
}
