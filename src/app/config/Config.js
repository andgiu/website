export const Globals = {

  stageWidth: 1280,
  stageHeight: 720,
  fontList: ['Montserrat'],
  color: {
    WHITE:      0xffffff,
    LIGHTGRAY:  0xf0f0f0,
    RED:        0xe01818
  },
  getWindowRectangle: function() {

    return new PIXI.Rectangle(0,0,window.innerWidth,window.innerHeight)

  }

}
