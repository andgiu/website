import AdvancedContainer from '../displayobjects/AdvancedContainer';

/**
 * Stage Manager Class
 * Manages the stage and its Components
 *
 * @constructor
 * 	@param {}
 */

export default class ContainerManager extends AdvancedContainer {

  constructor(...args) {
    super(...args);

    this.state = {

      ready:              false,
      active:             false,
      built:              false,
      drawn:              false,
      isTransitionIn:     false,
      isTransitionOut:    false,
      destroyable:        false

    }

    /**
     * Define internal functions
     */
    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.doTransitionIn = this.doTransitionIn.bind(this);
    this.doTransitionOut = this.doTransitionOut.bind(this);
    this.doTransitionInComplete = this.doTransitionInComplete.bind(this);
    this.doTransitionOutComplete = this.doTransitionOutComplete.bind(this);
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
   * Fired when the transitionIn function is complete
   * @return {null}
   */
  doTransitionInComplete() {
    this.state.isTransitionIn = false;
    this.state.active = true;
  }

  /**
   * Fired when the unmount function is called
   * Automatically set the active state to false
   * @return {null}
   */
  doTransitionOut() {
    this.state.isTransitionOut = true;
  }

  /**
   * Fired when the transitionOut function is complete
   * and if the displayobject ha the destroyable attribute set to true
   * it will destroy the displayobject
   * @return {null}
   */
  doTransitionOutComplete() {
    this.state.isTransitionOut = false;
    if(this.destroyable) this.destroyComponent();
  }

  /**
   * Fired when built function is called
   * @return {null}
   */
  draw() {

  }

  /**
   * Call this function once the Component is ready
   * it will fire the componentDidMount function
   * @return {null}
   */
  ready() {
    this.state.ready = true;
    this.componentDidMount();
  }

  /**
   * Call this function once the Component is built
   * it will fire the draw function
   * @return {null}
   */
  built() {
    this.state.built = true;
    this.draw();
  }

  /**
   * Call this function once the Component has been drawn
   * it will fire the doTransitionIn function
   * @return {null}
   */
  drawn() {
    this.state.drawn = true;
    this.doTransitionIn();
  }

  /**
   * Call this function once  you want to unmount the Component
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
