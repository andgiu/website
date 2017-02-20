import FilterManager from '../filters/FilterManager';
import AnimationStore from '../stores/AnimationStore';

let _smokeFilter;
export default class DisplacementMap extends PIXI.Sprite {

  constructor(...args){
    super(...args);

    this.FilterManager = new FilterManager(this,Globals.getWindowRectangle());
    _smokeFilter = this.FilterManager.addSmokeFilter();
  }

  update() {

    _smokeFilter.uniforms.u_time = performance.now() / 1000;

  }

}
