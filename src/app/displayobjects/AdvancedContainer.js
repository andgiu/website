import RendererStore from '../stores/RendererStore';

export default class AdvancedContainer extends PIXI.Container {

  constructor(...args) {
    super(...args);
    RendererStore.addChangeListener(this.onResizeHandler.bind(this));
  }

  onResizeHandler(renderer) {

    this.position.set(renderer.stageCenter.x,renderer.stageCenter.y);

  }

}
