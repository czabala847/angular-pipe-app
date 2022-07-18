import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
})
export class NoCommonsComponent implements OnInit {
  name: string = 'Ana';
  gender: string = 'femenino';

  invitationMap = {
    femenino: 'invitarla',
    masculino: 'invitarlo',
  };

  constructor() {}

  ngOnInit(): void {}
}
