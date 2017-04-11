import { SpriteSheet } from './SpriteSheet';
export interface ISpriteSheetImport {
  type: 'spritesheet';
  name: string;
  path: string;
  cell_width: number;
  cell_height: number;
};

export type IImport = ISpriteSheetImport;

export type IAsset = SpriteSheet;

export class AssetLibrary {
  private _assets: {[path: string]: IAsset};
  private _awaiting: {[path: string]: Promise<IAsset>};

  constructor() {
    this._assets = {};
    this._awaiting = {};
  }

  preload(reqs: IImport[]): Promise<IAsset[]> {
    return Promise.all(reqs.map(req => this.load(req)));
  }

  fetch(name: string): Promise<IAsset> {
    if(name in this._assets) {
      return Promise.resolve<IAsset>(this._assets[name]);

    } else if(name in this._awaiting) {
      return this._awaiting[name];

    } else {
      throw new Error(`asset "${name}" not found`);
    }
  }

  private load(req: IImport): Promise<IAsset> {
    switch(req.type) {
      case 'spritesheet':
        const promise = new Promise<IAsset>((resolve, reject) => {
          const img = new Image();
          img.onerror = () => reject(new Error(`image "${req.path}" failed to load`));
          img.onload = () => {
            resolve(new SpriteSheet(req.name, img, req.cell_width, req.cell_height));
          };
          img.src = req.path;
        });
          
        this._awaiting[req.name] = promise;
        return promise;

      default:
        throw new Error(`invalid asset type "${req.type}"`);
    }
  }

};