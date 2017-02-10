import ContainerManager from '../manager/ContainerManager';

export default class PreloaderView extends ContainerManager {

  constructor(...args) {
    super(...args);
  }

  componentWillMount() {
    super.componentWillMount();
    this.ready();
  }

  componentDidMount() {
    this.built();
  }

  draw() {

    var graphics = new PIXI.Graphics();

    // draw a rounded rectangle
    graphics.lineStyle(2, Globals.color.RED, 1);
    graphics.beginFill(Globals.color.WHITE, 1);
    graphics.drawRect(-60, -60, 120, 120);
    graphics.endFill();
    this.addChild(graphics);

    this.drawn();
  }



  doTransitionIn() {

  }

}
