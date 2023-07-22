class Layer {
  constructor() {
    this.layerID = Layer.incrementLayerID(); // Generate unique ID for each layer
    Layer.map.set(this.layerID, this); // Add this layer to the map

    this.neurons = new Map(); // Map to hold the neurons in this layer
  }
    
  addNeuron(neuron) {
    const id = neuron.processID;
    this.neurons.set(id, neuron); // Method to add a new neuron
  }
    
  getNeuron(id) {
    return this.neurons.get(id); // Method to get a neuron by its id
  }
    
  getNeurons() {
    return this.neurons; // Method to get all neurons
  }

  static incrementLayerID() {
    // Initialize layerID if it doesn't exist yet
    if (!this.layerID) {
      this.layerID = 0;
    }
    // Increment the layerID and return it
    return ++this.layerID;
  }
}

Layer.map = new Map(); // Initialize the map to hold all layers

module.exports = Layer;