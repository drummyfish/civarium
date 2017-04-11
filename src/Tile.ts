import { SpriteSheetCell } from './SpriteSheetCell';
import { Sprite } from './Sprite';

export class Tile {
  private _sprite: Sprite;
  private _x: number;
  private _y: number;

  constructor(frame: SpriteSheetCell, x: number, y: number) {
    this._x = x;
    this._y = y;

    this._sprite = new Sprite({
      name: 'tile',
      id: `tile-${x}-${y}`,
      x: (x - y) * 40,
      y: (x + y) * 20,
      animations: [],
    });

    this._sprite.setFrame(frame);
  }

  draw(canvas: CanvasRenderingContext2D, offsx: number = 0, offsy: number = 0) {
    this._sprite.draw(canvas, offsx, offsy);
  }

};
