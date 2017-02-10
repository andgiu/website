import NoiseFilter from './NoiseFilter';

export default class FilterManager {

  constructor(container, filterArea) {

    this.filterList = new Set();
    this.container = container;
    if(filterArea) this.container.filterArea = filterArea;

    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.updateFilterList = this.updateFilterList.bind(this);

  }

  /**
   * Add the filter to the filter list
   * and update the container filters property
   * @param {...args} arguments
   *  rand: (1f) 1.5
   *  strength: (1f) 0.25
   *  dimensions: (4fv) [0,0,0,0]
   * @returns {filter}
   */
  addNoiseFilter(...args) {

    let filter = new NoiseFilter(...args);
    this.addFilter(filter);

    this.updateFilterList();
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
