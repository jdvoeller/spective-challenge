import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-hooray',
	templateUrl: 'hooray.component.html',
	styleUrls: ['./hooray.component.scss'],
})

export class HoorayComponent {
	public name: string= '';
	public favoriteFood: string = '';

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
	) {
		this.activatedRoute.queryParams.subscribe((data) => {
			this.name = data['name'];
			this.favoriteFood = data['favoriteFood'];
		});
	}

	public goBack(): void {
		this.router.navigate(['/main']);
	}
}