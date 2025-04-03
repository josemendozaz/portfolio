import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IsPlatformBrowserService {

  constructor( @Inject(PLATFORM_ID) private platformId: Object ) { }

	checkPlatformBrowser( platformId : any ) {
		if ( isPlatformBrowser( platformId ) ) {
			// Accede a propiedades del navegador aquí
			console.log(window.location.href);
			return true;
		}
		return false;
	}
}
