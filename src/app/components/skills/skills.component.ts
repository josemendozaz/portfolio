/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component } from '@angular/core';
import * as AOS from 'aos';

/**
 * @class			SkillsComponent
 * @description		Componente que contiene la sección de habilidades
 */
@Component({
	selector	: 'app-skills',
	imports		: [],
	templateUrl	: './skills.component.html',
	styleUrl	: './skills.component.css'
})
/**
 * @class			SkillsComponent
 * @description		Componente que contiene la sección de habilidades
 */
export class SkillsComponent {
	ngOnInit(): void {
		AOS.init();
		window.addEventListener('load', AOS.refresh)
	}
}
