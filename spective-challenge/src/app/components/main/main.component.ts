import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-main',
	templateUrl: 'main.component.html',
	styleUrls: ['./main.component.scss'],
})

export class MainComponent  {
	public form: FormGroup;
	constructor(
		private fb: FormBuilder,
		private router: Router,
	) {
		this.form = this.fb.group({
			name: [''],
			favoriteFood: [''],
		});
	}

	public submit(): void {
		this.router.navigate(
			['/hooray'],
			{ queryParams: { name: this.form.get('name')?.value, favoriteFood: this.form.get('favoriteFood')?.value }}
		);
	}
}