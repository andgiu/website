import ContainerManager from '../displayobjects/AdvancedContainer';
import AnimationStore from '../stores/AnimationStore';

export default class PreloaderView extends ContainerManager {

  constructor(...args) {
    super(...args);

    AnimationStore.addChangeListener(this.animate.bind(this));

  }

  componentWillMount() {
    super.componentWillMount();


    this.ready();
  }

  componentDidMount() {


    this.built();
  }

  draw() {

    let text = new PIXI.Text('This is a pixi text'.toUpperCase(),
    {
      fontFamily : 'Montserrat',
      fontSize: 10,
      fill : 0xffffff,
      align : 'center',
      letterSpacing: 1
    });

    text.anchor.set(.5);
    text.position.x = window.innerWidth / 2;
    text.position.y = window.innerHeight / 2;;
    this.addChild(text);

    //this.drawTriangle(120);
    this.drawn();
  }

  /*
  drawTriangle(length, x, y) {

    const h = length * (Math.sqrt(3)/2);

    var graphics = new PIXI.Graphics();
    graphics.lineStyle(6, Globals.color.WHITE, 1);
    graphics.moveTo(0,-h / 2);
    graphics.lineTo(-length / 2, h / 2);
    graphics.lineTo(length / 2, h / 2);
    graphics.lineTo(0, -h / 2);

    graphics.filterArea = new PIXI.Rectangle(0,0,window.innerWidth,window.innerHeight);
    graphics.filters = [__glowFilter];

    this.addChild(graphics);
  }
  */

  animate() {


  }

  doTransitionIn() {

  }

}
