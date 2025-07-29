import { Component } from '@angular/core';
import { OrderingPipe } from '../../utils/ordering-pipe';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.html',
  styleUrl: './sorting.css',
  providers: [OrderingPipe]
})
export class Sorting {
  series: string[] = ["Breaking Bad", "Lost", "Squid Game"];

  constructor(private orderingPipe: OrderingPipe) {}

  removeSerie(index: number): void {
    this.series = this.series.filter((_, i) => i != index);
  }

  sortASC(): void {
    this.series = this.orderingPipe.transform(this.series, 'ASC');
  }

  sortDESC(): void {
    this.series = this.orderingPipe.transform(this.series, 'DESC');
  }
}
