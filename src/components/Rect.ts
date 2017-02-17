import { AbstractContainer } from "./AbstractContainer";
import { Size } from "../layout/Size";
import { Bounds } from "../layout/Bounds";
import { Insets } from "../layout/Insets";
import { Canvas } from "../core/Canvas";
import { AttachLogger, Log } from "../core/Log";

// @AttachLogger()
export class Rect extends AbstractContainer {

	backgroundColor: string

	constructor({
		backgroundColor = "lightblue"
	} : {
		backgroundColor?: string
	} = {}) {
		super();
		this.backgroundColor = backgroundColor;
	}

	@Log()
	preferredSize(): Size {
		 return new Size({
			width: 132,
			height: 132
		});
	}

	@Log()
	minimumSize(): Size {
		return new Size({
			width: 116,
			height: 116
		});
	}

	@Log()
	maximumSize(): Size {
		return new Size({
			width: 148,
			height: 148
		});
	}

	@Log()
	isVisible(): boolean {
		return true;
	}

	@Log()
	insets(): Insets {
		return new Insets();
	}

	@Log()
	doLayout(): void {
		let bounds = this.bounds();
		let ctx = Canvas._ctx;
		ctx.fillStyle = this.backgroundColor;
		ctx.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);
	}

	connectedCallback(): void {}
	disconnectedCallback(): void {}
	attributeChangedCallback(attributeName: string, oldValue: string | number, newValue: string | number): void {}
	adoptedCallback(oldCanvas: Canvas, newCanvas: Canvas): void {}
}