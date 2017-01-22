import { Bounds } from "../layout/Bounds";
import { Size } from "../layout/Size";
import { Insets } from "../layout/Insets";
import { Canvas } from "../core/Canvas";

export abstract class AbstractComponent {

	private _bounds: Bounds
	bounds(bounds?: Bounds): Bounds {
		if (bounds != null) {
			this._bounds = bounds;
		}
		return this._bounds;
	}

	abstract preferredSize(): Size;
	abstract minimumSize(): Size;
	abstract maximumSize(): Size;
	abstract isVisible(): boolean;
	abstract insets(): Insets;
	abstract doLayout(): void;

	// Called when the element is inserted into a document, including into a shadow tree
	abstract connectedCallback(): void;
	// Called when the element is removed from a document
	abstract disconnectedCallback(): void;
	// Called when an attribute is changed, appended, removed, or replaced on the element. Only called for observed attributes.
	abstract attributeChangedCallback(attributeName: string, oldValue: string | number, newValue: string | number): void;
	// Called when the element is adopted into a new canvas
	abstract adoptedCallback(oldCanvas: Canvas, newCanvas: Canvas): void;
}