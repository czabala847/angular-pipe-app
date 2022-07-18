import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
})
export class NoCommonsComponent implements OnInit {
  //i18nSelectPipe
  name: string = 'Carlos';
  gender: string = 'masculino';

  invitationMap = {
    femenino: 'invitarla',
    masculino: 'invitarlo',
  };

  client = {
    name: 'Carlos',
    age: 25,
    address: 'Barranquilla, Colombia',
  };

  //i18nPluralPipe

  clients: string[] = ['Carlos', 'Elena', 'Ana'];
  clientsMap = {
    '=0': 'cero clientes esperando.',
    '=1': 'un cliente esperando.',
    other: '# clientes esperando.',
  };

  constructor() {}

  ngOnInit(): void {}

  changeClient() {
    if (this.gender === 'masculino') {
      (this.name = 'Ana'), (this.gender = 'femenino');
    } else {
      (this.name = 'Carlos'), (this.gender = 'masculino');
    }
  }

  removeClient() {
    // if (this.clients.length > 0) {
    //   this.clients = this.clients.splice(0, this.clients.length - 1);
    // }

    this.clients.pop();
  }
}
