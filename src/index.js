"use strict";

import './scss/style.scss';

import Renderer from './app/renderer/Renderer';
import WebFontLoaderPromise from './app/helpers/WebFontLoaderPromise';

class Application {

  constructor() {

    Promise.all([
      new WebFontLoaderPromise()
    ]).then(
      this.initRenderer
    );

  }


  loadAssets() {

  }

  initRenderer() {

  
  }

}

const App = new Application();
