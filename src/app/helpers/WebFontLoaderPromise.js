import WebFont from 'webfontloader'

/**
 * Web Font Loader Promise
 *
 * Manages a few aspects of the animation loop and provides callbacks
 * for things such as Tween.js
 *
 * @data
 * 	tick : number of times render has been called
 * 	startTime : float ms of animation time start
 * 	currentTime : current float ms
 */

export default class WebFontLoaderPromise  {

  constructor() {

    return new Promise(function(resolve, reject) {

      try {

        WebFont.load({
          google:{
            families:['Montserrat']
          },
          active: resolve
        })

      } catch (e) {
        reject(e);
      }

    });

  }


}
