import { Injectable } from '@angular/core';
import { Work } from '../interfaces/work.interface';

@Injectable({
	providedIn	: 'root'
})

export class WorksService {

	works : Work[] = [
		{
			id			: 1,
			alias		: 'systmatick',
			title		: 'Sistema de Gestión de turnos de pacientes',
			description : 'Sistema de gestión de turnos',
			imgs 		: ['1.png','2.png','3.png','4.png','5.png']
		},
		{
			id			: 2,
			alias		: 'siress',
			title		: 'Sistema de Registro de Eventos',
			description : '',
			imgs 		: ['1.png','2.png','3.png','4.png','5.png']
		},
		// {
		// 	id			: 3,
		// 	alias		: 'magda',
		// 	title		: 'Pagina y sistema de gestión de inmobiliaria',
		// 	description : '',
		// 	img 		: ''
		// },
		// {
		// 	id			: 4,
		// 	alias		: 'orbis',
		// 	title		: 'Pagina exchange',
		// 	description : '',
		// 	img 		: ''
		// },
		// {
		// 	id			: 5,
		// 	alias		: 'auri',
		// 	title		: 'Pagina de ICO de token crypto',
		// 	description : '',
		// 	img 		: ''
		// },
	]

	constructor() { }


	getAll() {
		return this.works;
	}


	// isWork( idWork : number ) {
	// 	return this.works.id === idWork;
	//   }

	// getWork( id : number ) {
	// 	return this.works.find( id );
	// }


	// const inventario = [
	// 	{ nombre: "manzanas", cantidad: 2 },
	// 	{ nombre: "bananas", cantidad: 0 },
	// 	{ nombre: "cerezas", cantidad: 5 },
	//   ];

	//   function esCereza(fruta) {
	// 	return fruta.nombre === "cerezas";
	//   }

	//   console.log(inventario.find(esCereza));



}
