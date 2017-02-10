var noiseFrag = require('./shaders/noise.fs');

export default class NoiseFilter extends PIXI.Filter {

  constructor(...args) {
    super(null, noiseFrag);


    this.uniforms.rand = args[0] || 1.5;
    this.uniforms.strength = args[1] || 0,25;
    this.uniforms.dimensions = args[2] || [0,0,0,0];

  }

  get rand() {
    return this.uniforms.rand;
  }

  set rand(value) {
    this.dirty = true;
    this.uniforms.rand = value;
  }

  get strength() {
    return this.uniforms.strength;
  }

  set strength(value) {
    this.dirty = true;
    this.uniforms.strength = value;
  }

  get dimensions() {
    return this.uniforms.dimensions;
  }

  set dimensions(arrayV4) {
    this.uniforms.dimensions = arrayV4;
  }

}
