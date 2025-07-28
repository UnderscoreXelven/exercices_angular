import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  counter: number = 0;
  isEven: boolean = true;

  add(): void{
    this.counter = this.counter+1;
    this.CalcEven();
  };

  substract(): void{
    this.counter = this.counter-1;
    this.CalcEven()
  };

  CalcEven(): void{
    this.isEven = !this.isEven;
  }
}
