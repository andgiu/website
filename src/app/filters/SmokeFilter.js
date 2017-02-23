const fragment = require('./shaders/smoke.fs');

export default class SmokeFilter extends PIXI.Filter {

  constructor(...args) {
    super(null, fragment);

    this.uniforms.u_time = args[0] || 0.25;
    this.uniforms.u_resolution = args[1] || [1280,1280];
    this.uniforms.u_mouse = args[2] || [0,0];
  }

  get time() {
    return this.uniforms.u_time;
  }

  set time(value) {
    this.dirty = true;
    this.uniforms.u_time = value;
  }

  get res() {
    return this.uniforms.u_resolution;
  }

  set res(value) {
    this.dirty = true;
    this.uniforms.u_resolution = value;
  }


}
