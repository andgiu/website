import * as PIXI from 'pixi.js';
import StageManager from './manager/StageManager';

export default class Stage extends StageManager {

  constructor(...args) {
    super(...args);

  }

  componentWillMount() {
    super.componentWillMount();

    this.ready();
  }

  componentDidMount() {
    super.componentDidMount();

  }



}
