import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { ViaCepService } from '../viacep.service';

@Component({
  selector: 'app-put-person',
  templateUrl: './put-person.component.html',
  styleUrl: './put-person.component.css'
})


export class PutPersonComponent {
  person: any = {};
  addresses: any = {};
  cpf: string = '';
  modalOpened: boolean = false;


  constructor(private router: Router, private personService: PersonService, private viaCepService: ViaCepService) {}

  searchByCep(): void {
    if (this.addresses.cep.length === 8) {
      this.viaCepService.searchCep(this.addresses.cep).subscribe( {next: (data) => {
          console.log(data)
          this.addresses.street = data.logradouro; 
          this.addresses.complement = data.complemento; 
          this.addresses.neighborhood = data.bairro; 
          this.addresses.city = data.localidade; 
          this.addresses.state = data.uf; 
          
        }}
      );
    }else{
      alert("CEP inválido. Insira apenas numeros")
    }
  }

  getPersonsByCpf(): void {
    this.personService.getPersonsByCpf(this.cpf).subscribe({next:(person) =>{
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
    }, error: ()=> {
      alert("CPF inexistente")
    }})
  }

  closeModal(): void {
    const modal = document.getElementById('personModal');
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('style', 'display: none');
      this.modalOpened = false;
    }
}

  updatePerson(): void {
    this.personService.putPerson(this.person._id, this.person).subscribe({next: ()=>{
      this.personService.putAddress(this.person._id, this.addresses, this.addresses._id).subscribe({next: ()=>{
        this.closeModal();
        alert("cadastro atualizado com sucesso.")
      }, error: ()=>{
        alert("erro ao atualizar o endereço")
      }})
    }, error: ()=>{
      alert("erro ao atualizar cadastro")
    }})

    
  }
}
