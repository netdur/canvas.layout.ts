import { AbstractLayout } from "./AbstractLayout";
import { AbstractContainer } from "../components/AbstractContainer";
import { Size } from "./Size";

export class Linear extends AbstractLayout {
	preferred(container: AbstractContainer): Size {
		return new Size({
			height: 100,
			width: 100
		});
	}
	minimum(container: AbstractContainer): Size {
		return new Size({
			height: 100,
			width: 100
		});
	}
	maximum(container: AbstractContainer): Size {
		return new Size({
			height: 100,
			width: 100
		});
	}
	layout(container: AbstractContainer): void {}
}