/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import * as AOS from 'aos';
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 *
 */
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
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 */
export class HomeComponent {
	/**
	 * @function		constructor
	 * @description		Constructor del componente
	 */
	constructor() {}
	/**
	 * @function		ngOnInit
	 * @description		Ciclo de vida Init, carga al terminar de iniciar la pagina
	 */
	ngOnInit(): void {
		setTimeout(() => {
			AOS.init();
			window.addEventListener('load', AOS.refresh)
		}, 12000);
	}
	/**
	 * @function		onClickButton
	 * @description		Botón del nav menu flotante
	 */
	onClickButton( fragment : string ){
		document!.querySelector( `#${fragment!}` )!.scrollIntoView();
	}
}
