import { Routes } from '@angular/router';
import { OfFromFromEventComponent } from './of-from-from-event/of-from-from-event.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ZipForkJoinComponent } from './zip-fork-join/zip-fork-join.component';

export const routes: Routes = [
	{path: 'ofs' , component: OfFromFromEventComponent},
	{path: 'concatMap' , component: ConcatMapComponent},
	{path: 'zip-forkJoin' , component: ZipForkJoinComponent},
	{path: 'switchMap' , component: SwitchMapComponent},
	];