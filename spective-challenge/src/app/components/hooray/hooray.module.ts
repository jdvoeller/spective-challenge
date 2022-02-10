import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { HoorayComponent } from './hooray.component';

const NEBULAR_MODULES = [
	NbCardModule,
	NbButtonModule,
];

@NgModule({
	imports: [
		RouterModule,
		NEBULAR_MODULES,
	],
	exports: [HoorayComponent],
	declarations: [HoorayComponent],
})
export class HoorayModule { }
