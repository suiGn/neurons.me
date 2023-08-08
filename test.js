const neurons  = require('neurons.me');
let neuron = neurons.createNeuron();
console.log(neuron);

let layer = neurons.createLayer();
layer.addNeurons(neuron);
console.log(layer);

console.log(layer.getNeuron(neuron.processID));

console.log("///////////////////////////////");

let neuron1 = neurons.createNeuron();
let neuron2 = neurons.createNeuron();

let layer1 = neurons.createLayer();
layer1.addNeurons(neuron1);
layer1.addNeurons(neuron2);
console.log(layer1);

/*EXPERIMENTAL... NOT IMPLEMENTED YET
// Define a Protocol enum
const Protocol = Object.freeze({
  HTTP: 'http',
  HTTPS: 'https',
  SSH: 'ssh',
  WS: 'ws'
});

// Define a Synapse class
class Synapse {
  constructor(neuron1, neuron2, port, protocol) {
    this.neuron1 = neuron1;
    this.neuron2 = neuron2;
    this.port = port;
    this.protocol = protocol;
  }

  transmit(data) {
    throw new Error('Not implemented');
  }
}

// Usage:
const neuron1 = new Neuron('Local', 'localhost');
const neuron2 = new Neuron('API', 'api.example.com');
const port = 80;
const protocol = Protocol.HTTP;
const synapse = new Synapse(neuron1, neuron2, port, protocol);

// Transmit data from neuron1 to neuron2
// (This will throw an error because we haven't implemented the transmit method yet)
try {
  const response = synapse.transmit({ message: 'Hello, world!' });
  console.log(response);
} catch (error) {
  console.error(error);
}
*/
