import RendererStore from './stores/RendererStore';
import AnimationStore from './stores/AnimationStore';
import FilterManager from './filters/FilterManager';
import PreloaderView from './view/PreloaderView';


/*
 * View List
 */

let _preloader;

/*
 * Filter List
 */

let f__noise;
let f__smoke;
let f__cmatrix;
let f__hcontrast;

export default class Stage extends PIXI.Container {

  constructor(...args) {
    super(...args);

    this.active = false;
    this.FilterManager = new FilterManager(this,Globals.getWindowRectangle);

    RendererStore.addChangeListener(this.resize.bind(this));
    AnimationStore.addChangeListener(this.animate.bind(this));
    this.componentWillMount();
  }

  componentWillMount() {


    f__smoke = this.FilterManager.addSmokeFilter();
    //f__noise = this.FilterManager.addNoiseFilter();
    f__cmatrix = this.FilterManager.addColorMatrixFilter();
    //f__hcontrast = this.FilterManager.addHighContrastFilter();

    //f__cmatrix.desaturate();
    //f__cmatrix.polaroid(1);
    //f__cmatrix.contrast(.01,true);

    console.log(this.filters);
    this.componentDidMount();
  }

  componentDidMount() {

    _preloader = new PreloaderView();


    this.addChild(_preloader);

    this.active = true;
    RendererStore.emitChange();

  }

  onLoad(loader,res) {


  }

  resize(renderer) {

      const rect = Globals.getWindowRectangle();

      this.FilterManager.updateFilterArea(rect);
      f__smoke.res = [rect.width, rect.height];
      //f__noise.dimensions = [rect.width * 2, rect.height * 2];
  }

  animate(data) {

    if(this.active) {

      f__smoke.time += .025;
      //f__hcontrast.time += .01;

    }

  }

}
