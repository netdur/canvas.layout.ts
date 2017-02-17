import { Border } from "./Border";
import { Flow } from "./Flow";
import { Grid } from "./Grid";
import { FlexGrid } from "./FlexGrid";

import { Absolute } from "./Absolute";

export class Layout {
	static readonly VERTICAL: String = "vertical";
	static readonly HORIZONTAL: String = "horizontal";
	static readonly WRAP_CONTENT: String = "wrap_content";
	static readonly MATCH_PARENT: String = "match_parent";

	static readonly Border = Border
	static readonly Flow = Flow
	static readonly Grid = Grid
	static readonly FlexGrid = FlexGrid
	static readonly Absolute = Absolute
}
