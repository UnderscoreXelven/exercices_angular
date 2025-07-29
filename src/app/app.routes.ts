import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Series } from './pages/series/series';
import { Sorting } from './pages/sorting/sorting';

export const routes: Routes = [
    {path: "", component: Counter},
    {path: "series", component: Series},
    {path: "sorting", component: Sorting},
];
