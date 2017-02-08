import * as PIXI from 'pixi.js';
import { watch } from 'watch-object';



export default class StageManager extends PIXI.Container {

  constructor(...args) {
    super(...args);

    this.state = {

      ready: false,
      paused: false,
      active: true
    }

    this.componentWillMount();
  }
  componentWillMount() {

    watch(this.state,this.onStateHandler.bind(this));

  }

  get ready() {
    return this.state.ready;
  }

  set ready(bool) {
    this.state.ready = bool;
  }

  get paused() {
    return this.state.paused;
  }

  set paused(bool) {
    this.state.paused = bool;
  }

  get active() {
    return this.state.active;
  }

  set active(bool) {
    this.state.active = bool;
  }

  onStateHandler(newValue, oldValue, attr) {

    console.log("Attribute " + attr + " changed to: " + newValue + " from: " + oldValue);
    switch (attr) {

      case 'paused':

        

        break;

      default:

    }

  }

}
