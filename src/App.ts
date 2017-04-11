import { TileGrid } from './TileGrid';
import { Keyboard } from './Keyboard';
import { Animation } from './Animation';
import { Sprite } from './Sprite';
import { AssetLibrary } from './AssetLibrary';
import * as assets from './data/assets.json';

export class App {
  readonly keyboard: Keyboard;
  private _assets: AssetLibrary;

  constructor() {
    this._assets = new AssetLibrary();
    this.keyboard = new Keyboard();
  }

  async start(context: CanvasRenderingContext2D, width: number, height: number) {
    await this._assets.preload(assets);

    const woman = new Sprite({
      name: 'woman',
      id: 'woman1',
      x: 300,
      y: 200,
      animations: [
        new Animation({
          name: 'walking-north',
          sheet: await this._assets.fetch('woman-walking-north'),
          cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
          loop: true,
        }),
        new Animation({
          name: 'walking-east',
          sheet: await this._assets.fetch('woman-walking-east'),
          cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
          loop: true,
        }),
        new Animation({
          name: 'walking-south',
          sheet: await this._assets.fetch('woman-walking-south'),
          cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
          loop: true,
        }),
        new Animation({
          name: 'walking-west',
          sheet: await this._assets.fetch('woman-walking-west'),
          cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
          loop: true,
        }),
      ],
    });

    const man = new Sprite({
      name: 'man',
      id: 'man1',
      x: 500,
      y: 130,
      animations: [
        new Animation({
          name: 'walking-north',
          sheet: await this._assets.fetch('man-walking-north'),
          cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
          loop: true,
        }),
        new Animation({
          name: 'walking-east',
          sheet: await this._assets.fetch('man-walking-east'),
          cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
          loop: true,
        }),
        new Animation({
          name: 'walking-south',
          sheet: await this._assets.fetch('man-walking-south'),
          cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
          loop: true,
        }),
        new Animation({
          name: 'walking-west',
          sheet: await this._assets.fetch('man-walking-west'),
          cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
          loop: true,
        }),
      ],
    });

    const grid = new TileGrid(
      await this._assets.fetch('tiles'),
      Math.floor(window.innerWidth / 2),
      Math.floor(-window.innerHeight),
      50, 50,
    );

    woman.setFrame((await this._assets.fetch('woman-walking-east')).get(0, 0));
    man.setFrame((await this._assets.fetch('man-walking-south')).get(0, 0));

    this.keyboard.onPress(0x41, () => {

    });

    this.keyboard.onPress(Keyboard.ARROW_UP, () => {
      woman.setVelocity(2, -1);
      woman.setAnimation('walking-north');
    });

    this.keyboard.onPress(Keyboard.ARROW_RIGHT, () => {
      woman.setVelocity(2, 1);
      woman.setAnimation('walking-east');
    });

    this.keyboard.onPress(Keyboard.ARROW_DOWN, () => {
      woman.setVelocity(-2, 1);
      woman.setAnimation('walking-south');
    });

    this.keyboard.onPress(Keyboard.ARROW_LEFT, () => {
      woman.setVelocity(-2, -1);
      woman.setAnimation('walking-west');
    });

    this.keyboard.onPress(Keyboard.SPACE, () => {
      woman.setVelocity(0, 0);
      woman.animation.reset();
      woman.animation.pause();
    });


    setInterval(() => {
      context.clearRect(0, 0, width, height);
      grid.draw(context);
      woman.step();
      woman.draw(context);
      man.draw(context);
    }, 1000 / 10);
  }

};