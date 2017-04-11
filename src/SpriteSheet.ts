import { SpriteSheetCell } from './SpriteSheetCell';

export class SpriteSheet {
  readonly name: string;
  private _img: HTMLImageElement;
  readonly cell_width: number;
  readonly cell_height: number;
  readonly width: number;
  readonly height: number;

  constructor(name: string, img: HTMLImageElement, cell_width: number, cell_height: number) {
    this.name = name;
    this._img = img;
    this.cell_width = cell_width;
    this.cell_height = cell_height;
    this.width = img.width / cell_width;
    this.height = img.height / cell_height;

    if(!(Number.isInteger(this.width) && Number.isInteger(this.height))) {
      throw new Error(`sprite sheet "${this.name}" has mismatched dimensions`);
    }
  }

  get(x: number, y: number) {
    if(x >= this.width || y >= this.height) {
      throw new Error(`tried to access out-of-bounds sprite ${x}, ${y} from sheet "${this.name}"`);
    }

    return new SpriteSheetCell(this._img, x * this.cell_width, y * this.cell_height, this.cell_width, this.cell_height);
  }

};