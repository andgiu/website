import AdvancedContainer from '../displayobjects/AdvancedContainer';
import AnimationStore from '../stores/AnimationStore';


let _displacementSprite;
let _displacementFilter;
let _text;

export default class PreloaderView extends AdvancedContainer {

  constructor(...args) {
    super(...args);

    AnimationStore.addChangeListener(this.animate.bind(this));

  }

  componentWillMount() {
    super.componentWillMount();

    this.ready();
  }

  componentDidMount() {

    let sprite = new PIXI.Sprite.fromImage('./img/test.jpg');


    this.addChild(sprite);
    this.built();
  }

  draw() {

    /*
    _text = new PIXI.Text('This is a pixi text'.toUpperCase(),
    {
      fontFamily : 'Montserrat',
      fontSize: 10,
      fill : 0xffffff,
      align : 'center',
      letterSpacing: 1
    });

    _text.anchor.set(.5);
    _text.position.x = window.innerWidth / 2;
    _text.position.y = window.innerHeight / 2;;
    this.addChild(_text);
    */
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
