import { SpriteSheetCell } from './SpriteSheetCell';
import { Animation } from './Animation';

export interface ISpriteParams {
  name: string;
  id: string;
  x: number;
  y: number;
  animations: Animation[];
};

export class Sprite {
  readonly name: string;
  readonly id: string;
  private _x: number;
  private _y: number;
  private _frame: SpriteSheetCell;
  private _animation: Animation|null;
  private _animations: {[name: string]: Animation};
  private _velocity: {x: number, y: number};

  constructor(params: ISpriteParams) {
    this.name = params.name;
    this.id = params.id;
    this._x = params.x;
    this._y = params.y;
    this._animations = {};
    this._animation = null;
    this._frame = null;
    this._velocity = {x: 0, y: 0};

    for(const animation of params.animations) {
      this._animations[animation.name] = animation;
    }
  }

  get animation() { return this._animation; }

  setVelocity(x: number, y: number) {
    this._velocity = {x, y};
  }

  move(x: number, y: number) {
    this._x += x;
    this._y += y;
  }

  setFrame(frame: SpriteSheetCell) {
    this._frame = frame;
  }

  setAnimation(name: string) {
    if(name in this._animations) {
      this._animation = this._animations[name];
      this._animation.reset();
      this._animation.resume();

    } else {
      throw new Error(`invalid animation "${name}"`);
    }
  }

  step() {
    this.move(this._velocity.x, this._velocity.y);

    if(this._animation) {
      this._frame = this._animation.next();
    }
  }

  draw(canvas: CanvasRenderingContext2D, offsx: number = 0, offsy: number = 0) {
    if(this._frame) {
      this._frame.drawTo(canvas, this._x + offsx, this._y + offsy);
    }
  }

};