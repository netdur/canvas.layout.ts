import { AbstractLayout } from "./AbstractLayout";
import { AbstractContainer } from "../components/AbstractContainer";
import { Bounds } from "./Bounds";
import { Size } from "./Size";
import { Insets } from "./Insets";
import { AttachLogger, Log } from "../core/Log";

export enum Fill {
	vertical,
	horizontal
}

export class GridOptopns {
	items: Array<AbstractContainer>
	columns?: number
	rows?: number
	fillVertical?: Fill
	hgap?: number
	vgap?: number
}

//@AttachLogger()
export class Grid implements AbstractLayout {

	options: GridOptopns

	constructor({
		items,
		columns,
		rows = 0,
		fillVertical = Fill.vertical,
		hgap = 5,
		vgap = 5
	} : {
		items: Array<AbstractContainer>,
		columns?: number,
		rows?: number,
		fillVertical?: Fill
		hgap?: number,
		vgap?: number
	}) {
		this.options = {
			items: items,
			columns: columns,
			rows: rows,
			fillVertical: fillVertical,
			hgap: hgap,
			vgap: vgap
		}

		this.options.columns = this.options.columns || this.options.items.length;

		if (this.options.rows > 0) {
			this.options.columns = Math.floor((this.options.items.length + this.options.rows - 1) / this.options.rows); 
		} else {
			this.options.rows = Math.floor((this.options.items.length + this.options.columns - 1) / this.options.columns);
		}
	}

	@Log()
	layout(container: AbstractContainer) {
		let i: number;
		let j: number;
		const insets: Insets = container.insets();
		let x: number = insets.left;
		let y: number = insets.top;
		const width: number = (container.bounds().width - (insets.left + insets.right) - (this.options.columns - 1) * this.options.hgap) / this.options.columns;
		const height: number = (container.bounds().height - (insets.top + insets.bottom) - (this.options.rows - 1) * this.options.vgap) / this.options.rows;

		for (i = 0, j = 1; i < this.options.items.length; i += 1, j += 1) {
			this.options.items[i].bounds(new Bounds({'x': x, 'y': y, 'width': width, 'height': height}));

			if (!this.options.fillVertical) {
				if (j >= this.options.columns) {
					y += height + this.options.vgap;
					x = insets.left;
					j = 0;
				} else {
					x += width + this.options.hgap;
				}
			} else {
				if (j >= this.options.rows) {
					x += width + this.options.hgap;
					y = insets.top;
					j = 0;
				} else {
					y += height + this.options.vgap;
				}
			}
			this.options.items[i].doLayout();
		}

		return container;
	}

	@Log()
	items(): Array<AbstractContainer> {
		return this.options.items;
	}

	@Log()
 	preferred(container: AbstractContainer) : Size {
		return this.typeLayout('preferred', container);
	}

	@Log()
	minimum(container: AbstractContainer) : Size {
		return this.typeLayout('minimum', container);
	}

	@Log()
	maximum(container: AbstractContainer) : Size {
		return this.typeLayout('maximum', container);
	}

	@Log()
	typeLayout(type: string, container: AbstractContainer) : Size {
		const insets = container.insets();
		let width: number = 0;
		let height: number = 0;
		let type_size: Size;
		let i: number = 0;

		for (; i < this.options.items.length; i += 1) {
			type_size = this.options.items[i][type + 'Size']();
			width = Math.max(width, type_size.width);
			height = Math.max(height, type_size.height);
		}

		return new Size({
			'width': insets.left + insets.right + this.options.columns * width + (this.options.columns - 1) * this.options.hgap, 
			'height': insets.top + insets.bottom + this.options.rows * height + (this.options.rows - 1) * this.options.vgap
		});
	}
}