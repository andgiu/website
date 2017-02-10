import RendererStore from './stores/RendererStore';
import AnimationStore from './stores/AnimationStore';
import ContainerManager from './manager/ContainerManager';
import FilterManager from './filters/FilterManager';
import PreloaderView from './view/PreloaderView';



let _preloader;
let __noiseFilter;

export default class Stage extends PIXI.Container {

  constructor(...args) {
    super(...args);

    this.FilterManager = new FilterManager(this);

    RendererStore.addChangeListener(this.resize.bind(this));
    AnimationStore.addChangeListener(this.animate.bind(this));
    this.componentWillMount();
  }

  componentWillMount() {

    //__noiseFilter = this.FilterManager.addNoiseFilter(0.5,.035,[1200,1200]);


    this.componentDidMount();
  }

  componentDidMount() {

    _preloader = new PreloaderView();
    this.addChild(_preloader);

    RendererStore.emitChange();
  }

  onLoad(loader,res) {


  }

  resize(renderer) {

    this.FilterManager.updateFilterArea(new PIXI.Rectangle(0,0,window.innerWidth,window.innerHeight));

  }

  animate(data) {

    if(__noiseFilter)
      __noiseFilter.rand = Math.random();

  }

}
