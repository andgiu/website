"use strict";

import './scss/style.scss';
import * as PIXI from 'pixi.js';

import { Globals } from './app/config/Config'
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

    let renderer = new Renderer(Globals.stageWidth,Globals.stageHeight,{

      resolution:   window.devicePixelRatio || 1,
      antialias:    true,
      autoResize:   true,
      transparent:  false,
      backgroundColor: Globals.color.LIGHTGRAY

    });

    let stage = new Stage();
    renderer.addRenderable(stage);

    document.getElementById('application').appendChild(renderer.view);

  }

  /**
   * Error manager
   * @return {null}
   */
  onErrorHandler(e) {
    throw(e);
  }

}

window.Globals = Globals;
const App = new Application();
