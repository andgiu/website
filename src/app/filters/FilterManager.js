import NoiseFilter from './NoiseFilter';
import SmokeFilter from './SmokeFilter';
import HighContrast from './HighContrast';

export default class FilterManager {

  constructor(container, filterArea) {

    this.filterList = new Set();
    this.container = container;

    console.log(filterArea);
    if(filterArea) this.container.filterArea = filterArea;

    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.updateFilterList = this.updateFilterList.bind(this);

  }

  /**
   * Add the noise filter to the filter list
   * and update the container filters property
   * @param {...args} arguments
   *  rand: (1f) 1.5
   *  strength: (1f) 0.25
   *  dimensions: (4fv) [0,0,0,0]
   * @returns {filter}
   */
  addNoiseFilter(...args) {

    const filter = new NoiseFilter(...args);
    this.addFilter(filter);
    return filter;

  }

  /**
   * Add the smoke filter to the filter list
   * and update the container filters property
   * @param {...args} arguments
   *  u_time: time
   *  u_resolution: (2fv) [1280,720] Canvas resolution
   * @returns {filter}
   */
  addSmokeFilter(...args) {

    const filter = new SmokeFilter(...args);
    this.addFilter(filter);
    return filter;

  }

  /**
   * Add the Color Matrix filter to the filter list
   * and update the container filters property
   * @param {matrix} colormatrix
   * @returns {filter}
   */
  addColorMatrixFilter() {

    const filter = new PIXI.filters.ColorMatrixFilter();
    this.addFilter(filter);
    return filter;

  }

  addHighContrastFilter(...args) {
    const filter = new HighContrast(...args);
    this.addFilter(filter);
    return filter;
  }

  /**
   * Update the container filter list
   * @returns {filterList}
   */
  updateFilterList() {

    this.container.filters = Array.from(this.filterList);
    return this.filterList;
  }


  /**
   * Update the container filter area
   * @param {rect} PIXI.Rectangle
   * @returns null
   */
  updateFilterArea(rect) {
    this.container.filterArea = rect;
  }

  /**
   * Add the filter to the filter list
   * and update the container filters property
   * @param {filter} PIXI.Filter
   * @returns {filterList}
   */
  addFilter(filter) {

    this.filterList.add(filter);

    this.updateFilterList();
    return this.filterList;

  }

  /**
   * Remove a filter object from filter list
   * and update the container filters property
   * @param {filter} PIXI.Filter
   * @returns {filterList}
   */
  removeFilter(filter) {

    let hasFilter = this.filterList.has(filter);

    if(hasFilter)
      this.filterList.delete(filter);

    this.updateFilterList();
    return this.filterList;

  }

}
