import RendererStore from './stores/RendererStore';
import AnimationStore from './stores/AnimationStore';
import ContainerManager from './manager/ContainerManager';
import PreloaderView from './view/PreloaderView';

let _preloader;
let __filter;
let __glow;

export default class Stage extends PIXI.Container {

  constructor(...args) {
    super(...args);

    RendererStore.addChangeListener(this.resize.bind(this));
    AnimationStore.addChangeListener(this.animate.bind(this));
    this.componentWillMount();
  }

  componentWillMount() {
    this.componentDidMount();
  }

  componentDidMount() {

    _preloader = new PreloaderView();
    this.addChild(_preloader);

    PIXI.loader
    .add('shader','shaders/noise.frag')
    .add('convergence','shaders/convergence.frag')
    .load(this.onLoad.bind(this))


    RendererStore.emitChange();
  }

  onLoad(loader,res) {


    __filter = new PIXI.Filter(null, res.shader.data);
    __filter.uniforms.dimensions = [1024,1024,256,256];
    __filter.uniforms.rand = 32;
    __filter.uniforms.strength = 0.15;
    __filter.dirty = true;

    __glow = new PIXI.Filter(null, res.convergence.data);
    __glow.uniforms.dimensions = [0,0,0,0];
    __glow.uniforms.rand = 32;

    this.filterArea = new PIXI.Rectangle(0,0,window.innerWidth,window.innerHeight);
    this.filters = [__filter,__glow];

  }

  resize(renderer) {

  }

  animate(data) {

    if(__filter) __filter.uniforms.rand += Math.random(1.5,3);
  }

}
