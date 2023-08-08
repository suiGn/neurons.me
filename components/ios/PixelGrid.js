class PixelGrid extends HTMLElement {
    constructor() {
        super();
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.width = this.getAttribute('width') || 100; // default to 100 if no width attribute set
        this.height = this.getAttribute('height') || 100; // default to 100 if no height attribute set
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.attachShadow({mode: 'open'}).appendChild(this.canvas);
    }

    connectedCallback() {
        this.updateCanvas();
    }

    getPixel(x, y) {
        if (x >= this.width || y >= this.height) {
            throw new Error('Out of bounds');
        }
        return this.pixels[y * this.width + x];
    }

    setPixel(x, y, rgba) {
        if (x >= this.width || y >= this.height) {
            throw new Error('Out of bounds');
        }
        this.pixels[y * this.width + x] = rgba;
    }

    updateCanvas() {
        let imageData = this.context.createImageData(this.width, this.height);
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let rgba = this.getPixel(x, y);
                let index = (y * this.width + x) * 4;
                imageData.data[index] = rgba[0];
                imageData.data[index + 1] = rgba[1];
                imageData.data[index + 2] = rgba[2];
                imageData.data[index + 3] = rgba[3];
            }
        }
        this.context.putImageData(imageData, 0, 0);
    }
}

// Exports the PixelGrid class
module.exports = PixelGrid;