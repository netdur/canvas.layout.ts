import { AbstractLayout } from "./AbstractLayout";
import { AbstractContainer } from "../components/AbstractContainer";
import { Bounds } from "./Bounds";
import { Size } from "./Size";
import { Point } from "./Point";
import { Insets } from "./Insets";

export enum FlowAlignment {
	center,
	right,
	left
}

export class FlowOptions {
	hgap?: number = 5
	vgap?: number = 5
	alignment: FlowAlignment = FlowAlignment.left
	items: Array<AbstractContainer>
}

export class Flow implements AbstractLayout {

	options: FlowOptions

	constructor({
		hgap = 5,
		vgap = 5,
		alignment = FlowAlignment.left,
		items
	}: {
		hgap?: number,
		vgap?: number,
		alignment: FlowAlignment,
		items: Array<AbstractContainer>
	}) {
		this.options = {
			hgap: hgap,
			vgap: vgap,
			alignment: alignment,
			items: items
		}
	}

	align(row: Array<AbstractContainer>, offset: Point, rowSize: Size, parentSize: Bounds) {
		const location = new Bounds({
			x: offset.x,
			y: offset.y
		});
		let i = 0;
		let len = row.length;

		switch (this.options.alignment) {
			case FlowAlignment.center:
				location.x += (this.options.hgap + parentSize.width - rowSize.width) / 2;
				break;
			case FlowAlignment.right:
				location.x += parentSize.width - rowSize.width + this.options.hgap;
				break;
		}

		for (; i < len; i += 1) {
			let { width, height } = row[i].preferredSize();
			location.y = offset.y;
			row[i].bounds(new Bounds({
				y: location.y,
				x: location.x,
				width: width,
				height: height
			}));
			row[i].doLayout();
			location.x += row[i].bounds().width + this.options.hgap;
		}
	}

	layout(container: AbstractContainer) {
		const parentSize = container.bounds();
		const insets = container.insets();
		let i: number = 0;
		let len: number = this.options.items.length;
		let itemSize;
		let currentRow = [];
		let rowSize = new Size({
			width: 0,
			height: 0
		});
		let offset = new Point({
			x: insets.left,
			y: insets.top
		});

		parentSize.width -= insets.left + insets.right;
		parentSize.height -= insets.top + insets.bottom;

		for (; i < len; i += 1) {
			if (this.options.items[i].isVisible()) {
				itemSize = this.options.items[i].preferredSize();

				if ((rowSize.width + itemSize.width) > parentSize.width) {
					this.align(currentRow, offset, rowSize, parentSize);
					
					currentRow = [];
					offset.y += rowSize.height;
					offset.x = insets.left;
					rowSize.width = 0;
					rowSize.height = 0;
				}
				rowSize.height = Math.max(rowSize.height, itemSize.height + this.options.vgap);
				rowSize.width += itemSize.width + this.options.hgap;

				currentRow.push(this.options.items[i]);
			}
		}

		this.align(currentRow, offset, rowSize, parentSize);
		return container;
	}

	preferred(container: AbstractContainer) : Size {
		return this.typeLayout('preferred', container);
	}

	minimum(container: AbstractContainer) : Size {
		return this.typeLayout('minimum', container);
	}

	maximum(container: AbstractContainer) : Size {
		return this.typeLayout('maximum', container);
	}

	typeLayout(type: string, container: AbstractContainer) : Size {
		let i: number = 0;
		let width: number = 0;
		let height: number = 0;
		let typeSize: Size;
		let firstComponent: boolean = false;
		let insets: Insets = container.insets();

		for (; i < this.options.items.length; i += 1) {
			if (this.options.items[i].isVisible()) {
				typeSize = this.options.items[i][`${type}Size`]();
				height = Math.max(height, typeSize.height);
				width += typeSize.width;
			}
		}

		return new Size({
			'width': width + insets.left + insets.right + (this.options.items.length - 1) * this.options.hgap,
			'height': height + insets.top + insets.bottom
		})
	}

}