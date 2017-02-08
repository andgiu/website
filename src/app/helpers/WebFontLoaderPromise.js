import WebFont from 'webfontloader';

/**
 * Web Font Loader Promise
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
