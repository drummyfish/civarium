import { SpriteSheetCell } from './SpriteSheetCell';
import { SpriteSheet } from './SpriteSheet';

export interface IAnimationParameters {
  name: string;
  sheet: SpriteSheet;
  cells: Array<[number, number]>;
  loop: boolean;
};

export class Animation {
  readonly name: string;
  private _cells: SpriteSheetCell[];
  private _loop: boolean;
  private _index: number;
  private _paused: boolean;

  constructor(params: IAnimationParameters) {
    this.name = params.name;
    this._cells = params.cells.map(c => params.sheet.get(c[0], c[1]));
    this._loop = params.loop;
    this._index = 0;
    this._paused = false;
  }

  pause() {
    this._paused = true;
  }

  resume() {
    this._paused = false;
  }

  reset() {
    this._index = 0;
  }

  next() {
    const cell = this._cells[this._index];

    if(!this._paused) {
      this._index += 1;
      if(this._index >= this._cells.length) {
        if(this._loop) {
          this._index = 0;

        } else {
          this._index = this._cells.length - 1;
        }
      }
    }

    return cell;
  }

};