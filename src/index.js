"use strict";

import './scss/style.scss';

import Renderer from './app/renderer/Renderer';
import WebFontLoaderPromise from './app/helpers/WebFontLoaderPromise';
import Stage from './app/Stage';

class Application {

  constructor() {

    Promise.all([

      new WebFontLoaderPromise()

    ]).then(

      this.initRenderer,
      this.onErrorHandler

    );

  }

  /**
   * Create the WebGL Renderer View
   * @return {null}
   */
  initRenderer() {


    let renderer = new Renderer(1280,720,{

      resolution:   window.devicePixelRatio || 1,
      antialias:    true,
      autoResize:   true,
      transparent:  true

    });

    let stage = new Stage(1280,720);
    renderer.addRenderable(stage);

    document.getElementById('application').appendChild(renderer.view);

  }

  onErrorHandler(e) {
    throw(e);
  }

}

const App = new Application();
