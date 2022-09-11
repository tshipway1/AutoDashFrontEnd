import { SCREEN } from "../appConfig";
import { RENDER_KEYS } from "./Renderables";
import { DATA_MAP } from "../common/dataMap";
import BarGraph from "./BarGraph";
const PEDAL_KEY = DATA_MAP.PEDAL_POSITION.id;
const ID = RENDER_KEYS.PEDAL_GAUGE;
/**
 * Creates a new PedalGauge.
 * @class PedalGauge
 */
class PedalGauge extends BarGraph {
  constructor({ renderer, theme }) {
    super({ renderer, theme, width: SCREEN.BAR_WIDTH, height: SCREEN.RPM_CLUSTER_HEIGHT });
    this._dashID = ID;
  }

  // the data store values we want to listen too
  get dataKey() {
    return PEDAL_KEY;
  }
}

PedalGauge.ID = ID;
export default PedalGauge;