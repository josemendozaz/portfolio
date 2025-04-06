import { Component, CUSTOM_ELEMENTS_SCHEMA, NgZone } from '@angular/core';
import { WorksService } from '../../services/works.service';
import { Work } from '../../interfaces/work.interface';
import { ScreenLoadingService } from '../../services/screen-loading.service';
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 */
@Component({
	selector	: 'app-works',
	schemas		: [CUSTOM_ELEMENTS_SCHEMA],
	imports		: [],
	templateUrl	: './works.component.html',
	styleUrl	: './works.component.css'
})
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 *
 */
export class WorksComponent {
	/**
	 * @var				screenLoading
	 * @description		Bandera que sirve para ocultar/mostrar las pantallas de carga
	 */
	public screenLoading	: boolean	= false;
	/**
	 * @var				slideChange
	 * @description		Almacena todos los proyectos consultados en el servicio WorksService
	 */
	slideChange : boolean = false;
	/**
	 * @var				works
	 * @description		Almacena todos los proyectos consultados en el servicio WorksService
	 */
	works : Work[] = [];
	/**
	 * @method			constructor
	 * @description		Constructor del componente
	 */
	constructor(
		public zone					: NgZone,
		public screenLoadingService	: ScreenLoadingService,
		public worksService			: WorksService,
	) {
		this.works	= worksService.getAll();

	}
	/**
	 * @method			ngAfterViewInit
	 * @description		Ciclo de vida Init, carga despues de inicializar la vista
	 */
	ngAfterViewInit(): void {
		const bootstrapCarousel = document.getElementById('carouselExternal')!;

		if (!bootstrapCarousel) return;

		bootstrapCarousel.addEventListener('slid.bs.carousel', () => {
			this.slideChange	= true;
			console.log('📸 Slide cambiado!');
			this.initSwipers();
		});
		// Inicialización en primer render
		this.initSwipers();
	}
	/**
	 * @method			initSwipers
	 * @description		Inicia/Reinicia el Carousel Swipers
	 */
	initSwipers() {
		// Tiempo justo para que DOM se pinte post-transición
		setTimeout(() => {
			if ( this.slideChange ) { this.screenLoading	= true; }
			const activeItem = document.querySelector('.carousel-item.active');
			if (!activeItem) return;
			const swiperEl = activeItem.querySelector('swiper-container') as any;
			if (!swiperEl) {
				console.warn('❗ No se encontró swiper en el slide activo');
				return;
			}
			if (!swiperEl.swiper) {
				swiperEl.initialize?.();
				console.log('✅ Swiper inicializado en slide visible');
				setTimeout( () => { if ( this.slideChange ) { this.screenLoading	= false; } }, 20000);
			} else {
				swiperEl.swiper.update();
				swiperEl.swiper.slideTo(0);
				swiperEl.swiper.autoplay?.start();
				console.log('🔄 Swiper actualizado en slide visible');
				setTimeout( () => { if ( this.slideChange ) { this.screenLoading	= false; } }, 20000);
			}
		}, 200);
	}
}
