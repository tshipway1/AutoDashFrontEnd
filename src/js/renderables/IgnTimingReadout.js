import { DATA_KEYS } from "../common/dataMap";
import chroma from "chroma-js";
import SideReadout from "./SideReadout";
import { RENDER_KEYS } from "./Renderables";

const ID = RENDER_KEYS.IGN_TIMING_READOUT;
class IgnTimingReadout extends SideReadout {
  constructor({ renderer, theme }) {
    super(
      { renderer, theme },
      {
        readoutOptions: SideReadout.ReadoutOptions.ign,
      }
    );
    this._dashID = ID;
  }
  initialize() {
    this._initialize();
    this.bargraph.colors = {
      colors: [
        chroma(this.theme.dangerColor),
        chroma(this.theme.warningColor),
        chroma(this.theme.gaugeActiveColor),
        chroma(this.theme.warningColor),
        chroma(this.theme.dangerColor),
      ],
      chromaDomain: [0, 10, 20, 25, 50],
    };
  }

  // the data store values we want to listen too
  get dataKey() {
    return DATA_KEYS.IGNITION_TIMING;
  }
}

IgnTimingReadout.ID = ID;
export default IgnTimingReadout;
