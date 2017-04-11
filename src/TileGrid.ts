import { SpriteSheet } from './SpriteSheet';
import { Tile } from './Tile';

export class TileGrid {
  readonly width: number;
  readonly height: number;
  private _x: number;
  private _y: number;
  private _tiles: Tile[][];

  // tslint:disable-next-line:cyclomatic-complexity
  constructor(sheet: SpriteSheet, gx: number, gy: number, width: number, height: number) {
    this.width = width;
    this.height = height;
    this._x = gx;
    this._y = gy;

    this._tiles = [];
    for(let y = 0; y < height; y++) {
      const row = [];
      for(let x = 0; x < width; x++) {
        let sprite;

        switch(x) {
          case 15:
            sprite = sheet.get(1, 1);
            break;
          case 16:
            sprite = sheet.get(0, 2);
            break;
          default:
            sprite = sheet.get(1, 0);
        }

        const tile = new Tile(sprite, x, y);
        row.push(tile);
      }

      this._tiles.push(row);
    }
  }

  move(x: number, y: number) {
    this._x += x;
    this._y += y;
  }

  get(x: number, y: number) {
    if(x >= this.width || y >= this.height) {
      throw new Error(`tried to access out-of-bounds cell "${x}, ${y}"`);
    }

    return this._tiles[y][x];
  }

  draw(canvas: CanvasRenderingContext2D) {
    for(const row of this._tiles) {
      for(const cell of row) {
        cell.draw(canvas, this._x, this._y);
      }
    }
  }

};
