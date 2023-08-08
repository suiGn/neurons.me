//the NeuralNetworkClass.js
const Module = require('neurons.me/src/Modules');
class NeuralNetwork {
  constructor() {
    this.ID = NeuralNetwork.incrementNetworkID(); // Generate unique ID for each neural network
    this.layers = []; // Array to hold the layers
    this.neurons3DMap = new Map(); // Map to hold neurons in the 3D structure
    this.modules = {}; // Object to hold the individual modules for the NeuralNetwork
    NeuralNetwork.map.set(this.ID, this); // Add this neural network to the map
    this.isTraining = false; // Initial state
    this.epochCount = 0; // Initial count
  }
//-----------------------------------------
//-----------------------------------------
//ADDING MODULES
//-----------------------------------------
//-----------------------------------------
  addModule(name, module) {
    this.modules[name] = { ...module }; // Method to add a new module to the NeuralNetwork
  }
  removeModule(name) {
    delete this.modules[name]; // Method to remove a module from the NeuralNetwork
  }
  getModule(name) {
    return this.modules[name]; // Method to get a module from the NeuralNetwork
  }
  // Method to add a Modules Pack to the NeuralNetwork
  addPack(pack) {
    for (const moduleName in pack.modules) {
      const module = pack.modules[moduleName];
      this.addModule(moduleName, module);
    }
  }
//-----------------------------------------
//-----------------------------------------
//Running the Network ---------------------
//-----------------------------------------
//-----------------------------------------
train() {
  this.isTraining = true;
  // Training logic...
  this.epochCount++;
}

pause() {
  this.isTraining = false;
}
  forwardPropagation(input) {
// Propagate the input forward through the network
// This needs to be adapted to your specific network architecture and activation functions
  let output = input;
      for(let layer of this.layers) {
        output = layer.activate(output);
        }
      return output;
    }
backwardPropagation(output, target) {
// Propagate the error backward through the network
// This needs to be adapted to your specific network architecture and activation functions
// The code below is a placeholder and likely won't work for your needs
  let outputError = this.layers[this.layers.length - 1].calculateError(target);
      for(let i = this.layers.length - 2; i >= 0; i--) {
        outputError = this.layers[i].calculateError(outputError);
        }
        return outputError;
    }

//-----------------------------------------
//-----------------------------------------
//ACTIVATION FUNCTIONS  
//-----------------------------------------
//-----------------------------------------  
    setActivationFunction(func) {
        // Set the activation function for all layers in the network
        this.layers.forEach(layer => layer.setActivationFunction(func));
    }
//-----------------------------------------
//-----------------------------------------
//STRUCTURE
//-----------------------------------------
//-----------------------------------------
    addLayer(...layers) {
        for (const layer of layers) {
          this.layers.push(layer);
        }
      }
    getLayers() {
      console.log("getLayers(): ", this.ID);
        return this.layers; // Method to get all layers
    }
    add3DMap(neuron, x, y, z) {
      // Place a neuron in the 3D structure using the provided coordinates (x, y, z)
      const neuronID = neuron.processID; // Unique identifier for the neuron
      if (!this.neurons3DMap.has(x)) {
          this.neurons3DMap.set(x, new Map());
      }
      if (!this.neurons3DMap.get(x).has(y)) {
          this.neurons3DMap.get(x).set(y, new Map());
      }
      this.neurons3DMap.get(x).get(y).set(z, neuronID);
  }

  getNeuron3D(x, y, z) {
      // Get the neuron at the specified 3D coordinates (x, y, z)
      if (!this.neurons3DMap.has(x) || !this.neurons3DMap.get(x).has(y) || !this.neurons3DMap.get(x).get(y).has(z)) {
          return null; // Neuron not found at the specified coordinates
      }
      const neuronID = this.neurons3DMap.get(x).get(y).get(z);
      return Neuron.map.get(neuronID);
  }

  removeNeuron3D(x, y, z) {
      // Remove the neuron at the specified 3D coordinates (x, y, z)
      if (!this.neurons3DMap.has(x) || !this.neurons3DMap.get(x).has(y) || !this.neurons3DMap.get(x).get(y).has(z)) {
          return false; // Neuron not found at the specified coordinates
      }
      this.neurons3DMap.get(x).get(y).delete(z);
      return true;
  }


  //SETTING UP THE NETWORK COORDINATION.
    static incrementNetworkID() {
        // Initialize networkID if it doesn't exist yet
        if (!this.ID) {
            this.ID = 0;
        }
        // Increment the networkID and return it
        return ++this.ID;
    }
    serialize() {
      return {
        ID: this.ID,
        layers: this.layers.map(layer => layer.serialize()), // Assuming layers have a serialize method
        modules: this.modules, // Assuming modules can be serialized as-is
        neurons3DMap: Array.from(this.neurons3DMap.entries()).map(([x, yzMap]) => ({
          x,
          yzMap: Array.from(yzMap.entries()).map(([y, zMap]) => ({
            y,
            zMap: Array.from(zMap.entries())
          }))
        }))
        // Add other properties you want to serialize here
      };
    }

    static deserialize(data) {
      const neuralNetwork = new NeuralNetwork();
      neuralNetwork.ID = data.ID;
      neuralNetwork.layers = data.layers.map(layerData => Layer.deserialize(layerData)); // Assuming Layer has a deserialize method
      // Add other properties you want to deserialize here
      // ...
    
      return neuralNetwork;
    }
    
  
}

NeuralNetwork.map = new Map(); // Initialize the map to hold all networks

module.exports = NeuralNetwork;
