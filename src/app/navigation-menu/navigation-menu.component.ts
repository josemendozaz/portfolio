/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
/**
 * @class			NavigationMenuComponent
 * @description		Componente que contiene el menu de navegación flotante
 */
@Component({
	selector	: 'app-navigation-menu',
	imports		: [ RouterModule ],
	templateUrl	: './navigation-menu.component.html',
	styleUrl	: './navigation-menu.component.css'
})
/**
 * @class			NavigationMenuComponent
 * @description		Componente que contiene el menu de navegación flotante
 */
export class NavigationMenuComponent {
	/**
	 * @function		constructor
	 * @description		Constructor del componente
	 */
	constructor() {}
	/**
	 * @function		onClickButton
	 * @description		Botón del nav menu flotante
	 */
	onClickButton( fragment : string ){
		document!.querySelector( `#${fragment!}` )!.scrollIntoView();
	}
}
