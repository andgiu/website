const fragment = require('./shaders/test.fs');

export default class HighContrast extends PIXI.Filter {

  constructor(...args) {
    super(null, fragment);

    this.uniforms.rand = args[0] || 1.5;
    this.uniforms.blur = args[1] || [1,1];
    this.uniforms.dimensions = args[2] || [1280,1280,1280,1280];

  }

}
