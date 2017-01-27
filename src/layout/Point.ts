export class PointOptions {
	y: number
	x: number
}

export class Point {

	y: number
	x: number

	constructor({
		y = 0,
		x = 0
	} : {
		y: number,
		x: number
	}) {

		this.x = x;
		this.y = y;

	}
}