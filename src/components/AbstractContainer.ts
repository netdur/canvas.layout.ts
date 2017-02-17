import { AbstractComponent } from "./AbstractComponent";

export abstract class AbstractContainer extends AbstractComponent {
	items: Array<AbstractComponent> = new Array<AbstractComponent>();
	get children(): Array<AbstractComponent> {
		return this.items;
	}
}
