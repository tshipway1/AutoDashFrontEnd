const WIDTH = 1600;
const HEIGHT = 600;
const BORDER_WIDTH = 15;
const CONTENT_WIDTH = WIDTH - BORDER_WIDTH - BORDER_WIDTH;
const CONTENT_HEIGHT = HEIGHT - BORDER_WIDTH - BORDER_WIDTH;
const BAR_WIDTH = 50;
const RPM_CLUSTER_Y = 70;
const RPM_WIDTH = 200;
const RPM_CLUSTER_HEIGHT = CONTENT_HEIGHT - RPM_CLUSTER_Y + BORDER_WIDTH;
const SPEED_CLUSTER_Y = BORDER_WIDTH;
const SPEED_CLUSTER_HEIGHT = CONTENT_HEIGHT;
const SPEEDO_CLUSTER_WIDTH = 680;
const SPEEDO_SEGMENTS = 20;
const SPEEDO_SEGMENT_WIDTH = SPEEDO_CLUSTER_WIDTH / SPEEDO_SEGMENTS;
const SPEEDO_SWEEP_SIZE = SPEEDO_SEGMENT_WIDTH * 4;
const FUEL_GAUGE_WIDTH = BAR_WIDTH;
const FUEL_GAUGE_X = WIDTH - FUEL_GAUGE_WIDTH - BORDER_WIDTH;

// layout coodinates and dimensions
export const SCREEN = {
  WIDTH: WIDTH,
  HEIGHT: HEIGHT,
  BORDER_WIDTH: BORDER_WIDTH,
  CONTENT_WIDTH: CONTENT_WIDTH,
  CONTENT_HEIGHT: CONTENT_HEIGHT,
  TOP_CONTENT_Y: BORDER_WIDTH,
  BOTTOM_CONTENT_Y: CONTENT_HEIGHT + BORDER_WIDTH,
  PADDING: BORDER_WIDTH,
  BAR_WIDTH: BAR_WIDTH,
  RPM_CLUSTER_Y: RPM_CLUSTER_Y,
  RPM_WIDTH: RPM_WIDTH,
  RPM_CLUSTER_HEIGHT: RPM_CLUSTER_HEIGHT,
  SPEEDO_CLUSTER_Y: SPEED_CLUSTER_Y,
  SPEEDO_CLUSTER_HEIGHT: SPEED_CLUSTER_HEIGHT,
  SPEEDO_CLUSTER_WIDTH: SPEEDO_CLUSTER_WIDTH,
  SPEEDO_SEGMENT_WIDTH: SPEEDO_SEGMENT_WIDTH,
  SPEEDO_SWEEP_SIZE: SPEEDO_SWEEP_SIZE,
  SPEEDO_READOUT_HEIGHT: SPEED_CLUSTER_HEIGHT - SPEEDO_SWEEP_SIZE - BORDER_WIDTH,
  FUEL_GAUGE_X: FUEL_GAUGE_X,
  FUEL_GAUGE_Y: RPM_CLUSTER_Y,
  MPG_CLUSTER_Y: RPM_CLUSTER_Y,
}

export const PEDAL_CONFIG = {
  MIN: 0,
  MAX: 100
}

export const FUEL_CONFIG = {
  MIN: 0,
  MAX: 100,
  MAX_MPG: 15
}

export const RPM_CONFIG = {
  MIN: 0,
  MAX: 5000,
  DANGER_LOW: 600,
  WARNING_LOW: 1000,
  DANGER_HIGH: 4500,
  WARNING_HIGH: 3600,
  SEGMENTS: 10 // or 5??
}

export const SPEEDO_CONFIG = {
  MIN: 0,
  MAX: 99,
  WARNING_HIGH: 65,
  DANGER_HIGH: 90,
  SEGMENTS: SPEEDO_SEGMENTS
}


/**
 * @typedef ThemeData
 * @type {object}
 * @property {Number} gaugeBgColor
 * @property {Number} gaugeBgColorExtra
 * @property {Number} gaugeActiveColor
 * @property {Number} dangerColor
 * @property {Number} warningColor
 * @property {Number} nominalColor
 * @property {Number} backgroundColor
 * @property {Number} id
 */

/**
 * @type {ThemeData}
 */
export const DARK_THEME = {
  gaugeBgColor: 0x383838,
  gaugeBgColorExtra: 0x484848,
  gaugeActiveColor: 0xffffff,
  dangerColor: 0xf00000,
  warningColor: 0xff7c00,
  nominalColor: 0x121be0,
  backgroundColor: 0x0,
  id: 1
};

/**
 * @type {ThemeData}
 */
export const LIGHT_THEME = {
  gaugeBgColor: 0xebebeb,
  gaugeBgColorExtra: 0xdedede,
  gaugeActiveColor: 0x414141,
  dangerColor: 0xf00000,
  warningColor: 0xff7c00,
  nominalColor: 0x121be0,
  backgroundColor: 0xffffff,
  id: 0,
};

export const ENGINE_GRAPH_TYPES = {
  AFR: 'AFR',
  BOTH: 'BOTH'
}

export const app_settings = {
  dual_screen: false,
  engine_gragh_type: ENGINE_GRAPH_TYPES.AFR,
}