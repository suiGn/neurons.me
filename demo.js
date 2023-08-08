const { Neuron, Layer, createLayer, createNeuralNetwork, createNeuron } = require('neurons.me');

let neuronOptions = {
  weights: [0.5, 0.3, 0.2], // Example weights
  bias: 0.1,
  activationFunction: x => x * 2, // Example activation function
};

let layers = [];
for (let i = 0; i < 10; i++) {
  let layer = createLayer();
  for (let j = 0; j < 10; j++) {
    let neuron = createNeuron({ options: neuronOptions });
    layer.addNeurons(neuron);
    console.log(`Neuron ${j} in Layer ${i}: `, neuron); // Log each neuron
  }
  layers.push(layer);
}

const NeuralNetwork = require('neurons.me/src/NeuralNetworkClass');
let neuralNetwork = createNeuralNetwork();
layers.forEach(layer => neuralNetwork.addLayer(layer));

console.log("Neural Network Structure: ", neuralNetwork); // Log the entire neural network

// Optionally, log individual layers and neurons
neuralNetwork.layers.forEach((layer, index) => {
  console.log(`Layer ${index}:`, layer);
  layer.neurons.forEach((neuron, neuronIndex) => {
    console.log(`  Neuron ${neuronIndex}:`, neuron);
  });
});


console.log(neuralNetwork);
