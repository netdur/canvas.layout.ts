import { Border } from "./Border";
import { Flow } from "./Flow";
import { Grid } from "./Grid";
import { FlexGrid } from "./FlexGrid";

export class Layout {
	static readonly VERTICAL: String = "vertical";
	static readonly HORIZONTAL: String = "horizontal";
	static readonly WRAP_CONTENT: String = "wrap_content";
	static readonly MATCH_PARENT: String = "match_parent";

	static Border = Border
	static Flow = Flow
	static Grid = Grid
	static FlexGrid = FlexGrid
}
