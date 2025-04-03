import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector	: 'app-navigation-menu',
	imports		: [
		RouterModule,
	],
	templateUrl	: './navigation-menu.component.html',
	styleUrl	: './navigation-menu.component.css'
})

export class NavigationMenuComponent {
	constructor() {}
	onClickButton( fragment : string ){
		document!.querySelector( '#' + fragment! )!.scrollIntoView();
	}
}
