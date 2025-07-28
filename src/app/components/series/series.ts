import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  imports: [],
  templateUrl: './series.html',
  styleUrl: './series.css'
})
export class Series {
  series: string[] = [];
  constructor(){
    this.series.push("Lost");
    this.series.push("Breaking Bad");
    this.series.push("Squid Game");
    this.series.push("Game of Thrones");
  };

  delete(index: number){
    this.series.splice(index, 1);
  };
}
