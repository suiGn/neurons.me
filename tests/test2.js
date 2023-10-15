const Neuron = require('neurons.me/src/theNeuronClass'); // Make sure to update the path as needed
const Layer = require('neurons.me/src/LayerClass'); // Make sure to update the path as needed
// Specify the weights and other properties
let weights = [0.5, 0.3, 0.2]; // Example weights
let bias = 0.1;
let activationFunction = x => x * 2; // Example activation function
let name = 'MyNeuron';
// Create the neuron
let neuron = new Neuron({
  weights: weights,
  bias: bias,
  activationFunction: activationFunction,
  name: name
});

console.log(neuron);

console.log('Creating 10 neurons as neuron1 neuron2 etc till 10 and adding them to a layer');
let layer = new Layer();
for (let i = 1; i <= 10; i++) {
  let neuron = new Neuron({ name: `neuron${i}` });
  layer.addNeurons(neuron);
} 
console.log('printing layer');
console.log(layer);
console.log('printing layer.neurons');
console.log(layer.neurons);




