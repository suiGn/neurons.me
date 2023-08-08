//The LayersClass.js
class Layer {
  constructor() {
    this.layerID = Layer.incrementLayerID(); // Generate unique ID for each layer
    Layer.map.set(this.layerID, this); // Add this layer to the map
    this.neurons = new Map(); // Map to hold the neurons in this layer
  }
  addNeurons(neurons) {
    if (Array.isArray(neurons)) {
      neurons.forEach((neuron) => {
        const id = neuron.processID;
        this.neurons.set(id, neuron);
        console.log(`Added neuron with ID ${id} to layer ${this.layerID}`);
        
      });
    } else {
      const id = neurons.processID;
      this.neurons.set(id, neurons);
      console.log(`Added neuron with ID ${id} to layer ${this.layerID}`);
    }
  }
  getNeuron(id) {
    return this.neurons.get(id); // Method to get a neuron by its id
  }
  getNeurons(...indices) {
    return indices.map(index => {
      if (index >= 0 && index < this.neurons.length) {
        return this.neurons[index];
      } else {
        console.error(`Index out of bounds: ${index}`);
        return null;
      }
    });
  }
  static incrementLayerID() {
    // If layerID doesn't exist yet, initialize it based on the current map size
    if (typeof this.layerID === 'undefined') {
      this.layerID = Layer.map.size;
    }
    // Increment the layerID and return it
    return ++this.layerID;
  }

  serialize() {
    return {
      layerID: this.layerID,
      neurons: Array.from(this.neurons.values()).map(neuron => neuron.serialize()), // Assuming neurons have a serialize method
    };
    console.log("serialize(): ", this.layerID + " " + this.neurons);
  }

  static deserialize(data) {
    const layer = new Layer();
    layer.layerID = data.layerID;
    data.neurons.forEach(neuronData => {
      const neuron = Neuron.deserialize(neuronData); // Assuming Neuron has a deserialize method
      layer.addNeurons(neuron); // Corrected method name
    });
  
    return layer;
  }
}

Layer.map = new Map(); // Initialize the map to hold all layers

module.exports = Layer;