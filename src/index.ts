import { App } from './App';

const app = new App();
const canvas = document.getElementById('canvas');

if(canvas instanceof HTMLCanvasElement) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  app.keyboard.bind(document);
  app.start(canvas.getContext('2d'), canvas.width, canvas.height)

} else {
  throw new Error('invalid canvas!');
}