/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component, HostListener } from '@angular/core';
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
	showNavbar = false;
	/**
	 * @function		constructor
	 * @description		Constructor del componente
	 */
	constructor() {}
	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.showNavbar = window.scrollY > 100;
	}
	/**
	 * @function		onClickButton
	 * @description		Botón del nav menu flotante
	 */
	onClickButton( fragment : string ){
		document!.querySelector( `#${fragment!}` )!.scrollIntoView();
	}
}
