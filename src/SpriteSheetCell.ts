export class SpriteSheetCell {
  private _img: HTMLImageElement;
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;

  constructor(img: HTMLImageElement, x: number, y: number, width: number, height: number) {
    this._img = img;
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }

  drawTo(canvas: CanvasRenderingContext2D, x: number, y: number) {
    canvas.drawImage(this._img, this._x, this._y, this._width, this._height, x, y, this._width, this._height);
  }

};