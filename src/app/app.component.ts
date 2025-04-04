/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component, ElementRef, HostListener, Inject, inject, Injector, NgZone, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import {
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	Router,
	Event as RouterEvent,
	RouterModule,
	RouterOutlet
} from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";
import { IsPlatformBrowserService } from './services/is-platform-browser.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScreenLoadingService } from './services/screen-loading.service';
/**
 * @class			AppComponent
 * @description		Componente que contiene la sección de trabajos realizados
 *
 */
@Component({
	selector	: 'app-root',
	imports		: [
		RouterModule,			/* MODULE */
		MaterialModule,			/* MODULE */
		MatProgressSpinnerModule,
		HomeComponent,			/* COMPONENT */
		SkillsComponent,		/* COMPONENT */
		WorksComponent,			/* COMPONENT */
		NavigationMenuComponent	/* COMPONENT */
	],
	templateUrl	: './app.component.html',
	styleUrl	: './app.component.css'
})
/**
 * @class			AppComponent
 * @description		Componente que contiene la sección de trabajos realizados
 */
export class AppComponent {
	/**
	 * @var				loading : boolean
	 * @description		variable boolean que indica si se debe mostrar el spinner de carga
	 */
	loading	: boolean	= true;


	innerWidth : number	= 0;
	fragment: string | undefined;

	@ViewChild('fullpageRef') fp_directive: ElementRef | undefined;
	config: any;
	fullpage_api: any;

	title		: string	= 'portfolio_jmz';
	isBrowser	: boolean	= false;
	element: any;
	@HostListener('window:resize', ['$event'])

	@HostListener("wheel", ["$event"])
	public onScroll(event: WheelEvent) {
		// console.log( event );
	}
	// injector = inject(Injector);
	/**
	 * @function		constructor
	 * @description		Constructor del componente
	 */
	constructor(
		private renderer						: Renderer2,
		private isPlataformBrowserService		: IsPlatformBrowserService,
		public screenLoadingService 			: ScreenLoadingService,
		@Inject(PLATFORM_ID) private platformId	: Object,
		private ngZone							: NgZone,
		private router							: Router,
	) {
		console.log('this.loading');
		console.log(this.loading);
		this.isBrowser = this.isPlataformBrowserService.checkPlatformBrowser( this.platformId );
		if ( this.isBrowser ) {
			this.innerWidth = window.screen.height;
		}
		router.events.subscribe( this._navigationInterceptor.bind(this) );
	}
	/**
	 * @method			_navigationInterceptor
	 * @description		Muestra y oculta la pantalla de carga durante los cambios de eventos del enrutador
	 */
	_navigationInterceptor( event: RouterEvent ) : void {
		this.loading	= this.screenLoadingService.getValue;
		//// Se ejecuta esta función fuera de la zona angular para evitar la detección de cambios
		if ( event instanceof NavigationStart ) { this.ngZone.runOutsideAngular(() => { this.loading = false; }); }
		//// Se establecen el estado de la pantalla de carga en falso en caso de: terminar de cargar la ruta o de que falle alguna solicitud
		if ( event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError ) { this.loading = false; }
		setTimeout( () => { this.screenLoadingService.setValue	= this.loading; }, 2000);
  	}
	/**
	 * @method			ngAfterViewInit
	 * @description		Ciclo que inicia una vez cargada la pagina
	 */
	ngAfterViewInit(): void {
		try {
			document!.querySelector( '#' + this.fragment! )!.scrollIntoView();
		} catch (e) {}
	}
}
