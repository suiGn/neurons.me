const neurons = require('neurons.me');
//run before and after running demo.js
console.log(neurons.loadMe());

let neuron = neurons.createNeuron();
let neuron1 = neurons.createNeuron();
let layer = neurons.createLayer();
let neuralNetwork = neurons.createNeuralNetwork();

layer.addNeurons(neuron);
neuralNetwork.addLayer(layer);
console.log(layer.neurons);
layer.addNeurons(neuron1);
console.log(layer.neurons);

