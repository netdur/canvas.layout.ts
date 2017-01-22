import { Layout } from "./layout/Layout";
import { AbstractLayout } from "./layout/AbstractLayout";
import { Flow, FlowAlignment } from "./layout/Flow";
import { Grid } from "./layout/Grid";
import { FlexGrid } from "./layout/FlexGrid";
import { Border } from "./layout/Border";
import { Bounds } from "./layout/Bounds";
import { Checkbox } from "./components/Checkbox";
import { Rect } from "./components/Rect";
import { Canvas } from "./core/Canvas";

class Main {
	constructor() {
		let canvas: Canvas;
		let items: Array<Checkbox>;
		let layout: AbstractLayout;

		/* flow - FlowAlignment.left */
		canvas = new Canvas({
			width: 600,
			height: 50
		});
		new Flow({
			items: this.getCheckboxes(4),
			alignment: FlowAlignment.left
		}).layout(canvas.root);

		/* flow - FlowAlignment.center */
		canvas = new Canvas({
			width: 600,
			height: 50
		});
		new Flow({
			items: this.getCheckboxes(4),
			alignment: FlowAlignment.center
		}).layout(canvas.root);

		/* flow - FlowAlignment.right */
		canvas = new Canvas({
			width: 600,
			height: 50
		});
		new Flow({
			items: this.getCheckboxes(4),
			alignment: FlowAlignment.right
		}).layout(canvas.root);

		/* flow - FlowAlignment.left & break */
		canvas = new Canvas({
			width: 600,
			height: 120
		});
		new Flow({
			items: this.getCheckboxes(20),
			alignment: FlowAlignment.left
		}).layout(canvas.root);

		/* Grid */
		canvas = new Canvas({
			width: 600,
			height: 120
		});
		new Grid({
			items: this.getCheckboxes(4),
			rows: 2,
			columns: 2
		}).layout(canvas.root);

		/* Border */
		canvas = new Canvas({
			width: 600,
			height: 200
		});
		new Border({
			west: new Checkbox(),
			center: new Checkbox(),
    		north: new Checkbox()
		}).layout(canvas.root);

		/* flex grid */
		canvas = new Canvas({
			width: 600,
			height: 120
		});
		new FlexGrid({
			// items: this.getCheckboxes(6),
			items: [new Checkbox(), new Rect({backgroundColor:"green"}), new Checkbox(),
					new Checkbox(), new Rect({backgroundColor:"blue"}), new Checkbox()],
			rows: 2,
			columns: 2
		}).layout(canvas.root);
	}

	getCheckboxes(len: number): Array<Checkbox> {
		const list = new Array<Checkbox>();
		for (let i = 0; i < len; i++) list.push(new Checkbox());
		return list;
	}
}

// document.addEventListener("DOMContentLoaded", e => new Main(), false);
new Main()
