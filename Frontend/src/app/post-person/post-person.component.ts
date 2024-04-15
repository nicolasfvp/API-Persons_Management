import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { ViaCepService } from '../viacep.service';


@Component({
  selector: 'app-post-person',
  templateUrl: './post-person.component.html',
  styleUrl: './post-person.component.css'
})

export class PostPersonComponent {
  name: string = '';
  cpf: string = '';
  gender: string = '';
  birthDate: Date = new Date(1990, 0, 1);
  maritalStatus: string = '';
  address:{
    cep: string;
    street: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };

  constructor(private router: Router, private personService: PersonService, private viaCepService: ViaCepService) {
    this.address = {
      cep: '',
      street: '',
      number: 0,
      complement: '',
      neighborhood: '',
      city: '',
      state: ''
    };
  }

  searchByCep(): void {
    if (this.address.cep.length === 8) {
      this.viaCepService.searchCep(this.address.cep).subscribe(
        data => {
          this.address.street = data.logradouro; 
          this.address.complement = data.complemento; 
          this.address.neighborhood = data.bairro; 
          this.address.city = data.localidade; 
          this.address.state = data.uf; 
          
        },
        error => {
          console.error('Erro ao buscar endereço por CEP:', error);
        }
      );
    }
  
    
  }

  calcAge(birthDate: Date): { age: number, daysUntillNextBirthday: number } {
    const date = new Date();
    const birthDay = new Date(birthDate);
    birthDay.setDate(birthDay.getDate() + 1)
    const actualYear = date.getFullYear();
    const actualMonth = date.getMonth();
    const today = date.getDate();
    
    let age = actualYear - birthDay.getFullYear();
    const birthDayMonth = birthDay.getMonth();
    const birthDayDate = birthDay.getDate();

    if (birthDayMonth > actualMonth || (birthDayMonth === actualMonth && birthDayDate > today)) {
      age--;
    }

    const nextBirthday = new Date(actualYear, birthDayMonth, birthDayDate);
    
    if (nextBirthday < date) {
      nextBirthday.setFullYear(actualYear + 1);
    }

    const diffTime = nextBirthday.getTime() - date.getTime();
    const daysUntillNextBirthday = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return { age, daysUntillNextBirthday };
  }


  // verificar esta seção
  async verifyCpf(cpf: string): Promise<boolean> {
    let existeCpf: boolean = false;
    let p = new Promise<boolean>((resolve, rejected)=>{
      this.personService.getPersonsByCpf(cpf).subscribe({next: (person)=>{
        resolve(existeCpf)
      }, error: ()=>{
          existeCpf = true
        resolve(existeCpf)
      }})

    })
    return await p
  }
  

  async formPostPerson(): Promise<void> {
    const newAddress = {
      cep: this.address.cep,
      address: this.address.street,
      number: this.address.number,
      complement: this.address.complement,
      neighborhood: this.address.neighborhood,
      city: this.address.city,
      state: this.address.state

    }
    const newPerson = {
      name: this.name,
      cpf: this.cpf,
      gender: this.gender,
      birthDate: this.birthDate,
      maritalStatus: this.maritalStatus,
    };
    
      if(await this.verifyCpf(this.cpf)){
        this.personService.postPerson(newPerson).subscribe(() => {
          console.log("cadastrado")
          this.personService.getPersonsByCpf(newPerson.cpf).subscribe(person=>{
            this.personService.postAddress(person._id, newAddress).subscribe(()=>{
              console.log('Endereço cadastrado com sucesso')
            }, error => {
              console.error('Erro ao cadastrar endereço', error)
            })
          }, error => {
            console.error('Erro ao cadastrar endereço', error)
          })
        }, error => {
          console.error('Erro ao cadastrar pessoa:', error);
        });
      }else{
        console.error("cpf ja existente")
        return
      }
    }
  }

