import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  imports: [],
  templateUrl: './series.html',
  styleUrl: './series.css'
})
export class Series {
  series : string[] = ["Série 1", "Série 2", "Série 3"]

  removeSerie(index : number) : void {
    // this.series.splice(index,1)
    this.series = this.series.filter((_, i) => i != index)
  }
}
