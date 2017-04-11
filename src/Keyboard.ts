export type IKeyboardHandler = () => void;

export class Keyboard {
  static ARROW_LEFT = 37;
  static ARROW_UP = 38;
  static ARROW_RIGHT = 39;
  static ARROW_DOWN = 40;
  static SPACE = 32;

  private _handlers: Map<number, IKeyboardHandler>;

  constructor() {
    this._handlers = new Map();
  }

  onPress(key: number, callback: IKeyboardHandler) {
    this._handlers.set(key, callback);
  }

  bind(doc: Document) {
    doc.onkeydown = (e: KeyboardEvent) => {
      console.log('pressed', e.which);
      const key = e.which;
      const callback = this._handlers.get(key);
      if(callback) {
        callback();
      }
    };
  }

};