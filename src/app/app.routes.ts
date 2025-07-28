import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { Series } from './components/series/series';

export const routes: Routes = [
    {path: "", component: Counter},
    {path: "series", component: Series}
];
