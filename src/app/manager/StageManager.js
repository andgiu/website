import * as PIXI from 'pixi.js';

/**
 * Stage Manager Class
 * Manages the stage and its Components
 *
 * @constructor
 * 	@param {}
 */

export default class StageManager extends PIXI.Container {

  constructor(...args) {
    super(...args);

    this.state = {

      ready:              false,
      active:             false,
      built:              false,
      isTransitionIn:     false,
      isTransitionOut:    false,
      destroyable:        false

    }

    this.componentWillMount();
  }

  /**
   * Fired once the class has been created
   * @return {null}
   */
  componentWillMount() {

  }

  /**
   * Fired once the class is ready
   * state.ready = true
   * @return {null}
   */
  componentDidMount() {

  }

  /**
   * Fired when the unmount method is called
   * @return {null}
   */
  componentWillUnmount() {
    this.doTransitionOut();
  }

  /**
   * Fired when the built function is called
   * @return {null}
   */
  doTransitionIn() {
    this.state.isTransitionIn = true;
  }

  /**
   * Fired when the unmount function is called
   * Automatically set the active state to false
   * @return {null}
   */
  doTransitionInComplete() {
    this.state.isTransitionIn = false;
    this.state.active = true;
  }

  doTransitionOut() {
    this.state.isTransitionOut = true;
  }

  doTransitionOutComplete() {
    this.state.isTransitionOut = false;
    if(this.destroyable) this.destroyComponent();
  }

  /**
   * Call this function when the Component is ready
   * it will fire the componentDidMount function
   * @return {null}
   */
  ready() {
    this.state.ready = true;
    this.componentDidMount();
  }

  /**
   * Call this function when the Component is built
   * it will fire the doTransitionIn function
   * @return {null}
   */
  built() {
    this.state.built = true;
    this.doTransitionIn();
  }

  /**
   * Call this function when the you want to unmount the Component
   * If the destroyable attribute is set to true the destroy function
   * is called once the doTransitionOutComplete is fired
   * @return {null}
   */
  unmount() {
    this.state.active = false;
    this.doTransitionOut();
  }

  /**
   * Destroy the Component
   *	@return {null}
   */
  destroyComponent() {
    this.destroy();
  }


  get destroyable() {
    return this.state.destroyable;
  }

  set destroyable(bool) {
    this.state.destroyable = bool;
  }


  get active() {
    return this.state.active;
  }

  set active(bool) {
    this.state.active = bool;
  }


}
