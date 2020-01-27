import './custom.window.ts';

interface CanvasOptions {
  width?: number
  height?: number
  backgroundColor?: string
}

(function(window, document) {

  class CanVo {
    private canvas: HTMLCanvasElement;

    constructor(id: string, options: CanvasOptions = {}) {
      const canvas = <HTMLCanvasElement> document.getElementById(id);
      canvas.width =  document.body.clientWidth;
      canvas.height = document.body.clientHeight;
      canvas.style.backgroundColor = options.backgroundColor || 'white';

      this.canvas = canvas;
    }

    getCanvas() {
      // TODO: temp to use this.canvas ts warning
      return this.canvas;
    }
  }

  window.CanVo = CanVo;
  
})(window, document);
