import { AbstractLayout } from "./AbstractLayout";
import { AbstractContainer } from "../components/AbstractContainer";
import { Size } from "./Size";
import { FlexGrid } from "./FlexGrid";
import { Grid, Fill } from "./Grid";

export class Linear extends FlexGrid {
	constructor({
		items,
		orientation = Fill.vertical,
		hgap = 1,
		vgap = 1
	} : {
		items: Array<AbstractContainer>,
		orientation?: Fill
		hgap?: number,
		vgap?: number
	}) {
		super({
			items: items,
			columns: (orientation === Fill.vertical) ? 1 : items.length,
			rows: (orientation === Fill.horizontal) ? 1 : items.length,
			fillVertical: orientation,
			hgap: hgap,
			vgap: vgap
		});
	}
}