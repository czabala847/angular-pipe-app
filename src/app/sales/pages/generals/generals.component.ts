import { Component } from '@angular/core';

@Component({
  selector: 'app-generals',
  templateUrl: './generals.component.html',
})
export class GeneralsComponent {
  nameLower: string = 'carlos';
  nameUpper: string = 'CARLOS';
  fullName: string = 'cArLos zABala';

  date: Date = new Date();
}
