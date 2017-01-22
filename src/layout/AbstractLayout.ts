import { AbstractContainer } from "../components/AbstractContainer";
import { Size } from "./Size";

export abstract class AbstractLayout {
	abstract preferred(container: AbstractContainer): Size;
	abstract minimum(container: AbstractContainer): Size;
	abstract maximum(container: AbstractContainer): Size;
	abstract layout(container: AbstractContainer): void;
}
