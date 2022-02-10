import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

import { MainComponent } from './main.component';

const NEBULAR_MODULES = [
	NbCardModule,
	NbButtonModule,
	NbInputModule,
];

@NgModule({
	imports: [
		ReactiveFormsModule,
		RouterModule,
		NEBULAR_MODULES,
	],
	exports: [MainComponent],
	declarations: [MainComponent],
})
export class MainModule { }
