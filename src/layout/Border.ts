import { AbstractLayout } from "./AbstractLayout";
import { AbstractContainer } from "../components/AbstractContainer";
import { Bounds } from "./Bounds";
import { Size } from "./Size";

export class BorderOptions {
	center?: AbstractContainer
	north?: AbstractContainer
	south?: AbstractContainer
	east?: AbstractContainer
	west?: AbstractContainer
	hgap?: number
	vgap?: number
}

export class Border implements AbstractLayout {

	children: Array<AbstractContainer> = new Array();
	options: BorderOptions

	constructor({
		center,
		north,
		south,
		east,
		west,
		hgap = 5,
		vgap = 5
	} : {
		center?: AbstractContainer
		north?: AbstractContainer
		south?: AbstractContainer
		east?: AbstractContainer
		west?: AbstractContainer
		hgap?: number
		vgap?: number
	}) {
		this.options = {
			center: center,
			north: north,
			south: south,
			east: east,
			west: west,
			hgap: hgap,
			vgap: vgap
		}

		/*
		this.options.filter(value => isNaN(value)).forEach(r => this.children.push(r));
		
		this.options.forEech((container: any) => {
			if (container instanceof AbstractContainer) {
				this.children.push(container);
			}
		});
		*/

		if (this.options.east) this.children.push(this.options.east);
		if (this.options.west) this.children.push(this.options.west);
		if (this.options.north) this.children.push(this.options.north);
		if (this.options.south) this.children.push(this.options.south);
		if (this.options.east) this.children.push(this.options.center);
	}

	items(): Array<AbstractContainer> {
		return this.children;
	}

	layout(container: AbstractContainer) {
		const size = container.bounds();
		const insets = container.insets();
		let top: number = insets.top;
		let bottom: number = size.height - insets.bottom;
		let left: number = insets.left;
		let right: number = size.width - insets.right;
		let tmp: Size;

		if (this.options.north && this.options.north.isVisible()) {
			tmp = this.options.north.preferredSize();
			this.options.north.bounds(new Bounds({'x': left, 'y': top, 'width': right - left, 'height': tmp.height}));
			this.options.north.doLayout();
			top += tmp.height + this.options.vgap;
		}

		if (this.options.south && this.options.south.isVisible()) {
			tmp = this.options.south.preferredSize();
			this.options.south.bounds(new Bounds({'x': left, 'y': bottom - tmp.height, 'width': right - left, 'height': tmp.height}));
			this.options.south.doLayout();
			bottom -= tmp.height + this.options.vgap;
		}

		if (this.options.east && this.options.east.isVisible()) {
			tmp = this.options.east.preferredSize();
			this.options.east.bounds(new Bounds({'x': right - tmp.width, 'y': top, 'width': tmp.width, 'height': bottom - top}));
			this.options.east.doLayout();
			right -= tmp.width + this.options.hgap;
		}

		if (this.options.west && this.options.west.isVisible()) {
			tmp = this.options.west.preferredSize();
			this.options.west.bounds(new Bounds({'x': left, 'y': top, 'width': tmp.width, 'height': bottom - top}));
			this.options.west.doLayout();
			left += tmp.width + this.options.hgap;
		}

		if (this.options.center && this.options.center.isVisible()) {
			this.options.center.bounds(new Bounds({'x': left, 'y': top, 'width': right - left, 'height': bottom - top}));
			this.options.center.doLayout();
		}

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
		const insets = container.insets();
		let width: number = 0;
		let height: number = 0;
		let type_size: Size;

		if (this.options.east && this.options.east.isVisible()) {
			type_size = this.options.east[`${type}Size`]();
			width += type_size.width +this.options.hgap;
			height = type_size.height;
		}
				
		if (this.options.west && this.options.west.isVisible()) {
			type_size = this.options.west[`${type}Size`]();
			width += type_size.width + this.options.hgap;
			height = Math.max(type_size.height, height);
		}

		if (this.options.center && this.options.center.isVisible()) {
			type_size = this.options.center[`${type}Size`]();
			width += type_size.width;
			height = Math.max(type_size.height, height);
		}
			
		if (this.options.north && this.options.north.isVisible()) {
			type_size = this.options.north[`${type}Size`]();
			width = Math.max(type_size.width, width);
			height += type_size.height + this.options.vgap;
		}
			
		if (this.options.south && this.options.south.isVisible()) {
			type_size = this.options.south[`${type}Size`]();
			width = Math.max(type_size.width, width);
			height += type_size.height + this.options.vgap;
		}

		return new Size({
			'width': width + insets.left + insets.right, 
			'height': height + insets.top + insets.bottom
		});
	}
}
