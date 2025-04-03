import { Component, ElementRef, HostListener, Inject, inject, Injector, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";
import { IsPlatformBrowserService } from './services/is-platform-browser.service';

@Component({
	selector	: 'app-root',
	imports		: [
		RouterModule,			/* MODULE */
		MaterialModule,			/* MODULE */
		HomeComponent,			/* COMPONENT */
		SkillsComponent,		/* COMPONENT */
		WorksComponent,			/* COMPONENT */
		NavigationMenuComponent	/* COMPONENT */
	],
	templateUrl	: './app.component.html',
	styleUrl	: './app.component.css'
})
export class AppComponent {

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
		console.log( event );
	}

	injector = inject(Injector);

	constructor(
		private renderer: Renderer2,
		private isPlataformBrowserService : IsPlatformBrowserService,
		@Inject(PLATFORM_ID) private platformId: Object
	) {
		this.isBrowser = this.isPlataformBrowserService.checkPlatformBrowser( this.platformId );
		if ( this.isBrowser ) {
			this.innerWidth = window.screen.height;
		}
	}



	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		try {
		  document!.querySelector( '#' + this.fragment! )!.scrollIntoView();
		} catch (e) {}
	}




	// getRef( fullPageRef: any ) {
	// 	this.fullpage_api = fullPageRef;
	// }

}
