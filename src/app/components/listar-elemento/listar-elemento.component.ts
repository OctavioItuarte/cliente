import { Component } from '@angular/core';
import { User } from '../../models/user';
import { NgFor } from '@angular/common';
//import { Object } from 

@Component({
  selector: 'app-listar-elemento',
  imports: [NgFor],
  templateUrl: './listar-elemento.component.html',
  styleUrl: './listar-elemento.component.css'
})
export class ListarElementoComponent {
    listaUsuarios: User[] = [{
        e_mail: "juliantorrissi@gmail.com",
        name: "Julian Torrissi",
        password: "string",
        birthdate: new Date("1999-11-29"),
        phone_number: "2494354231",
        approve: true,
        entry_date: new Date("2015-09-12")
    },
    {
        e_mail: "octavioituarte@gmail.com",
        name: "Octavio Ituarte",
        password: "string",
        birthdate: new Date("2000-11-29"),
        phone_number: "249435531",
        approve: false,
        entry_date: new Date("2015-12-12")
    }
  ];

  getNameAtribute(): string[] {
    return this.listaUsuarios.length > 0 ? Object.keys(this.listaUsuarios[0]) : [];
  }

  getValoresAtributos(usuario: Record<string, any>): string[] {
    return Object.values(usuario);
  }

}

