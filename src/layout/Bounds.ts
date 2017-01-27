import { Size } from "./Size";
import { Point } from "./Point";

export class BoundsOptions {
	x?: number
	y?: number
	width?: number
	height?: number
}

export class Bounds {

	x: number
	y: number
	width: number
	height: number

	constructor(options: BoundsOptions) {

		if (options.x != undefined) this.x = options.x;
		if (options.y != undefined) this.y = options.y;
		if (options.width != undefined) this.width = options.width;
		if (options.height != undefined) this.height = options.height;

	}
}