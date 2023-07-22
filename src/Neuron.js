const Module = require('./Module'); // adjust the path to point to the correct file
class Neuron {
  constructor({load = null, options = {}, weights = [], bias = 0, activationFunction = x => x} = {}) {
      this.processID = Neuron.incrementProcessID(); // Generate unique ID for each neuron
      Neuron.map.set(this.processID, this); // Add this neuron to the map

      this.modules = {};
      if (load) {
          // Iterate over each module and add its properties directly to `this.modules`
          for (let moduleName in load.getModules()) {
              let moduleInstance = load.getModule(moduleName);
              this.modules[moduleName] = {...moduleInstance};
          }
      }

      Object.assign(this, options);
      this.weights = weights;
      this.bias = bias;
      this.activationFunction = activationFunction;
  }

  addModule(name, module) {
      this.modules[name] = {...module}; // Method to add a new module
  }

  removeModule(name) {
      delete this.modules[name]; // Method to remove a module
  }

  getModule(name) {
      return this.modules[name]; // Method to get a module
  }

  static incrementProcessID() {
      // Initialize processID if it doesn't exist yet
      if (!this.processID) {
          this.processID = 0;
      }
      // Increment the processID and return it
      return ++this.processID;
  }
}

Neuron.map = new Map(); // Initialize the map to hold all neurons

module.exports = Neuron;
