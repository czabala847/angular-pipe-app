import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  text: string = 'Nosotros';
  mayus: boolean = true;

  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.green,
    },
  ];

  toggleMayus() {
    this.mayus = !this.mayus;
  }
}
