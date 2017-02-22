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

    f__noise = this.FilterManager.addNoiseFilter();

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

      this.FilterManager.updateFilterArea(Globals.getWindowRectangle());
  }

  animate(data) {

    if(this.active) {

      f__noise.rand = Math.random();
      

    }

  }

}
