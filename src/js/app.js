// ideas - keep track of background, active, etc colors!
// redraw if theme change
// TODO: make this be the one that contructs the scene

import * as PIXI from "pixi.js";
import PedalGauge from "./renderables/PedalGauge";
import { DEFAULT_COLORS } from "./appConfig";
import RPMGauge from "./renderables/RPMGauge";
import { createRpmCluster, createSpeedoCluster } from "./renderHelpers";
import { Renderables } from "./renderables/Renderables"
import SpeedoSweep from "./renderables/SpeedoSweep";
import SpeedoReadout from "./renderables/SpeedoReadout";
import BorderWarnings from "./renderables/BorderWarnings";
import { DATA_KEYS, createDataStore } from "./dataMap";

export class DashApp {
  /**
   * @param { PIXI.Renderer } renderer
   */
  constructor(renderer) {
    this.renderer = renderer;
    this.stage = new PIXI.Container();
    this.stage.interactiveChildren = false; // dont bother checking anyone for interactions

    this.setColors();
    this.state = (/** @type {Object} */ updatedGaugeData) => {};

    this.renderables = new Renderables({
      renderer: this.renderer,
      theme: this.theme,
    });
  }

  setColors() {
    this.theme = {
      gaugeBgColor: DEFAULT_COLORS.gaugeBgColor,
      gaugeActiveColor: DEFAULT_COLORS.gaugeActiveColor,
      dangerColor: DEFAULT_COLORS.dangerColor,
      warningColor: DEFAULT_COLORS.warningColor,
      nominalColor: DEFAULT_COLORS.nominalColor,
    };
  }

  initialize() {
    const pedalGauge = this.renderables.createRenderable(PedalGauge);
    const rpmGauge = this.renderables.createRenderable(RPMGauge);
    const speedoSpeed = this.renderables.createRenderable(SpeedoSweep);
    const speedoReadout = this.renderables.createRenderable(SpeedoReadout);
    const borderWarnings = this.renderables.createRenderable(BorderWarnings);
    createRpmCluster(pedalGauge, rpmGauge, this);
    createSpeedoCluster(speedoSpeed, speedoReadout, rpmGauge, this);
    this.stage.addChild(borderWarnings);
    this.renderables.initializeAll();
    
    // start rendering
    this.state = this.stateStartup;
  }

  update(updatedGaugeData) {
    this.state(updatedGaugeData);
    this.renderer.render(this.stage);
  }

  /**
   * 
   * @param {Array} updatedGaugeData 
   */
  stateRunning(updatedGaugeData) {
    DATA_KEYS
    this.renderables.forEach(renderable => {
      renderable.value = renderable.dataKey != undefined ? updatedGaugeData[renderable.dataKey] : updatedGaugeData;
    });

    this.renderables.updateAll();
  }

  stateStartup(_updatedGaugeData) {
    // TODO; testing phase of gauages
    this.renderables.updateAll();
    setTimeout(() => {
      this.state = this.stateRunning;
    }, 1000)
    
  }

  stateShutdown(updatedGaugeData) {
    // show MPG stats?
  }
}
