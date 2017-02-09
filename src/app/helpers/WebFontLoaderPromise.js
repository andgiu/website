import WebFont from 'webfontloader';

/**
 * Promise
 * Web Font Loader
 *
 * Manages the loading of the font by @font-face or google fonts
 *
 * @constructor
 * 	@param {}
 *
 */

export default class WebFontLoaderPromise  {

  constructor() {

    return new Promise(function(resolve, reject) {

      try {

        WebFont.load({
          google:{
            families: Globals.fontList
          },
          active: resolve
        })

      } catch (e) {
        reject(e);
      }

    });

  }


}
