import { AbstractContainer } from "./AbstractContainer";
import { RegisterElement } from "./AbstractComponent";
import { Size } from "../layout/Size";
import { Insets } from "../layout/Insets";
import { Canvas } from "../core/Canvas";
import { AttachLogger, Log } from "../core/Log";

// @AttachLogger()
/*
@RegisterElement({
	selector: 'Checkbox',
	style: `
		Checkbox {

		}
	`,
	template: `
		<Flow oriental="horizontal" class="CheckboxContainer">
			<Rect class="CheckboxRect" /><Label class="CheckboxLabel" text="check me up">
		</Flow>
	`
})
*/
export class Checkbox extends AbstractContainer {

	@Log()
	preferredSize(): Size {
		return new Size({
			width: 32,
			height: 32
		});
	}

	@Log()
	minimumSize(): Size {
		return new Size({
			width: 16,
			height: 16
		});
	}

	@Log()
	maximumSize(): Size {
		return new Size({
			width: 48,
			height: 48
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
		ctx.save();

		ctx.fillStyle = "#dddddd";
		ctx.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);

		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#333333";
		ctx.rect(bounds.x, bounds.y, bounds.width, bounds.height);
		ctx.stroke();
		ctx.restore();
	}

	connectedCallback(): void {}
	disconnectedCallback(): void {}
	attributeChangedCallback(attributeName: string, oldValue: string | number, newValue: string | number): void {}
	adoptedCallback(oldCanvas: Canvas, newCanvas: Canvas): void {}
}