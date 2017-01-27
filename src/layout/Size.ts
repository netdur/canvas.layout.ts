export class SizeOptions {
	width: number
	height: number
}

export class Size {

	width: number
	height: number

	constructor({
		width = 0,
		height = 0
	} : {
		width: number,
		height: number,
	}) {

		this.width = width;
		this.height = height;

	}
}