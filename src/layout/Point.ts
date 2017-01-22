export class PointOptions {
	y: number
	x: number
}

export class Point {
	y: number
	x: number
	constructor(options?: PointOptions) {
		this.x = options.x;
		this.y = options.y;
	}
}