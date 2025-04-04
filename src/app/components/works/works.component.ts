import { Component } from '@angular/core';
import { WorksService } from '../../services/works.service';
import { Work } from '../../interfaces/work.interface';
import { JsonPipe } from '@angular/common';
// import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 *
 */
@Component({
	selector	: 'app-works',
	imports		: [
		// JsonPipe,
		// BrowserModule, BrowserAnimationsModule,
		// CarouselModule,
	],
	templateUrl	: './works.component.html',
	styleUrl	: './works.component.css'
})
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 *
 */
export class WorksComponent {
	// /**
	//  * @var				customOptionsCarrousel
	//  * @description		Opciones para el carrusel que muestra los balances de las cuentas
	//  */
	// public customOptionsCarrousel	: OwlOptions = {
	// 	lazyLoad			: true,
	// 	loop				: true,
	// 	autoplay			: true,
	// 	margin				: 0,
	// 	nav					: false,
	// 	center				: true,
	// 	dots				: false,
	// 	navSpeed			: 1400,
	// 	autoplayTimeout		: 10000,
	// 	autoplaySpeed		: 5000,
	// 	autoplayHoverPause	: true,
	// 	navText				: ['◀','▶'],
	// 	responsive			: {
	// 		0	: { items : 1 },
	// 	},
	// }

	works : Work[] = [];
	/**
	 * @var				constructor
	 * @description		Constructor del componente
	 *
	 */
	constructor( public worksService : WorksService ) {
		this.works	= worksService.getAll();
	}

}
