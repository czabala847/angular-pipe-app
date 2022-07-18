import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  text: string = 'Nosotros';
  mayus: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleMayus() {
    this.mayus = !this.mayus;
  }
}
