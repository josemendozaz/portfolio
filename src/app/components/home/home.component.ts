import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
@Component({
	selector	: 'app-home',
	imports		: [
		RouterModule,
		MatChipsModule,
		MatDividerModule
	],
	templateUrl	: './home.component.html',
	styleUrl	: './home.component.css'
})
export class HomeComponent {
	onClickButton( fragment : string ){
		document!.querySelector( '#' + fragment! )!.scrollIntoView();
	}
}
