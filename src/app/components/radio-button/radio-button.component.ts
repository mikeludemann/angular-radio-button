import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
		selector: 'radio-button',
		templateUrl: './radio-button.component.html',
		styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() name: string;
	@Input() value: string;
	@Input() isChecked: boolean;

	constructor() { }

	ngOnInit() {
	}

	//isChecked:boolean = false;

	doCheck($event) {
		this.isChecked = !this.isChecked;
	}

}
