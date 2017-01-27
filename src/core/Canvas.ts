import { Rect } from "../components/Rect";
import { AbstractContainer } from "../components/AbstractContainer";

import { Bounds } from "../layout/Bounds";

export class Canvas {

	// for testing purpose only, not in production
	static _ctx: CanvasRenderingContext2D

	static readonly debug: boolean = true;
	static attachedLoggers = new Array();

	id: string
	element: HTMLCanvasElement
	ctx: CanvasRenderingContext2D

	root: AbstractContainer

	constructor({
		id = "",
		canvas,
		width = 600,
		height = 400
	} : {
		id?: string,
		canvas?: (string | HTMLCanvasElement),
		width?: number,
		height?: number
	}) {

		/* create element element */
		if (canvas instanceof HTMLCanvasElement) {
			this.element = canvas;
		} if (id != "" && !(canvas instanceof HTMLCanvasElement)) {
			this.element = document.getElementById(id) as HTMLCanvasElement;
		} else {
			this.element = document.createElement("canvas");
			document.body.appendChild(this.element);

			// just for demo
			let hr = document.createElement("hr");
			document.body.appendChild(hr);
		}

		this.element.width = width;
		this.element.height = height;
		this.ctx = this.element.getContext("2d");
		Canvas._ctx = this.ctx;

		this.root = new Rect();
		this.root.bounds(new Bounds({
			x: 0,
			y: 0,
			width: width,
			height: height
		}));
		this.render();
	}
	render() {
		this.root.doLayout();
	}
}