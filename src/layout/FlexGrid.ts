import { Grid } from "./Grid";
import { AbstractContainer } from "../components/AbstractContainer";
import { Size } from "./Size";
import { Insets } from "./Insets";
import { Log, AttachLogger } from "../core/Log";

// @AttachLogger()
export class FlexGrid extends Grid {

	zeroArray(a: Array<any>, l: number): Array<any> {
		let i: number = 0;
		for (; i < l; i += 1) {
			a[i] = 0;
		}
		return a;
	}

	@Log()
	layout(container: AbstractContainer) {
		let i: number = 0;
		let c: number = 0;
		let r: number = 0;
		let pd: Size = this.preferred(container);
		let sw: number = container.bounds().width / pd.width;
		let sh: number = container.bounds().height / pd.height;
		let w: any[] = this.zeroArray([], this.options.columns);
		let h: any[] = this.zeroArray([], this.options.rows);
		let insets: Insets = container.insets();
		let x: number = insets.left;
		let y: number = insets.top;
		let d: Size;

		for (i = 0; i < this.options.items.length; i += 1) {
			r = Math.floor(i / this.options.columns);
			c = i % this.options.columns;
			d = this.options.items[i].preferredSize();
			d.width = sw * d.width;
			d.height = sh * d.height;

			if (w[c] < d.width) {
				w[c] = d.width;
			}
			if (h[r] < d.height) {
				h[r] = d.height;
			}
		}

		for (c = 0; c < this.options.columns; c += 1) {
			for (r = 0, y = insets.top; r < this.options.rows; r += 1) {
				i = r * this.options.columns + c;
				if (i < this.options.items.length) {
					this.options.items[i].bounds({'x': x, 'y': y, 'width': w[c], 'height': h[r]});
					this.options.items[i].doLayout();
				}
				y += h[r] + this.options.vgap;
			}
			x += w[c] + this.options.hgap;
		}
		return container;
	}

	@Log()
	typeLayout(type: string, container: AbstractContainer) : Size {
		let i: number = 0;
		let r: number = 0;
		let c: number = 0;
		let nw: number = 0;
		let nh: number = 0;
		let w: Array<any> = this.zeroArray([], this.options.columns);
		let h: Array<any> = this.zeroArray([], this.options.rows);
		let type_size: Size;
		let insets: Insets = container.insets();
			
		for (i = 0; i < this.options.items.length; i += 1) {
			r = Math.floor(i / this.options.columns);
			c = i % this.options.columns;
			type_size = this.options.items[i][type + 'Size']();
			if (w[c] < type_size.width) {
				w[c] = type_size.width;
			}
			if (h[r] < type_size.height) {
				h[r] = type_size.height;
			}
		}
		
		for (i = 0; i < this.options.columns; i += 1) {
			nw += w[i];
		}
		
		for (i = 0; i < this.options.rows; i += 1) {
			nh += h[i];
		}

		return new Size({
			width: insets.left + insets.right + nw + (this.options.columns - 1) * this.options.hgap,
			height: insets.top + insets.bottom + nh + (this.options.rows - 1) * this.options.vgap
		});
	}
}