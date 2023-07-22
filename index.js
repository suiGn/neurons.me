//Library for creating neural networks in Node.js:
console.log(`
  __
 |@@|
  \--/             ニューロン
┌┐┌┌─┐┬ ┬┬─┐┌─┐┌┐┌┌─┐ ┌┬┐┌─┐
│││├┤ │ │├┬┘│ ││││└─┐ │││├┤ 
┘└┘└─┘└─┘┴└─└─┘┘└┘└─┘o┴ ┴└─┘                                                                                                              
neurons.me
one neuron at the time:
`);
const path = require('path');
const thisFilePath = path.resolve(__dirname, 'index.js');
const scripts = require('./scripts');
//クラス
const Neuron = require('./src/Neuron');
const Layer = require('./src/Layer');
const NeuralNetwork = require('./src/NeuralNetwork');
const { Module, defacto } = require('./src/Module');
//インスタンス
module.exports = {
  Neuron: Neuron,
  Layer: Layer,
  NeuralNetwork: NeuralNetwork,
  scripts: scripts,
  Module: Module,
  defacto: defacto,
  createNeuron: function ({ load = null, options = {} } = {}) {
    let neuron = new Neuron({ load, options });
    Neuron.map.set(neuron.processID, neuron); // Use Neuron.map instead of this.map
    return neuron;
  },
  initNeuron: function (neuron) {
    //...
  },
}
console.log(module.exports);
console.log("Use neurons.scripts.getPrototype(myNetwork); to see the prototype of the object.");
console.log("-------------------------------");
console.log("------starting neurons.me -----");
console.log("-------------------------------");
/*CHECK AUTOMATICALLY FOR UPDATES
scripts.checkAndUpdateNeuronsMe(); 
scripts.checkUpdates();*//*
╭━━━┳━━━━┳━━━┳━╮╭━╮
┃╭━╮┃╭╮╭╮┃╭━╮┃┃╰╯┃┃
┃┃╱┃┣╯┃┃╰┫┃╱┃┃╭╮╭╮┃
┃╰━╯┃╱┃┃╱┃┃╱┃┃┃┃┃┃┃
┃╭━╮┃╱┃┃╱┃╰━╯┃┃┃┃┃┃
╰╯╱╰╯╱╰╯╱╰━━━┻╯╰╯╰╯
Start a new process for neuronInstance.js
*/
/* You could try running this code:

full node.js code:

const neurons = require('neurons.me');
// Custom options for the neuron
let options = {
  name: 'x', // Custom name for the neuron
  date: '2023-07-25', // Custom date
  time: '12:30 PM', // Custom time
  color: 'blue', // Custom color
  activationFunction: x => x * 2 // Custom activation function
};
// Create a neuron with custom options
let neuron = new neurons.createNeuron({ options: options });
let neuron2 = new neurons.createNeuron({ options: options });
// Create a new layer instance
let layer = new neurons.Layer();
let layer2 = new neurons.Layer();
let layer3 = new neurons.Layer();
// Add the neuron to the layer
layer.addNeuron(neuron);
layer.addNeuron(neuron2);
layer2.addNeuron(neuron);
layer2.addNeuron(neuron2);
layer3.addNeuron(neuron);
layer3.addNeuron(neuron2);
// Get all the neurons in the layer
let neuralNetwork = new neurons.NeuralNetwork();
neuralNetwork.addLayer(layer, layer2, layer3);
console.log(neuralNetwork.getLayers());
console.log(neuralNetwork.ID);
console.log(neurons.NeuralNetwork.map);
console.log(neuralNetwork.getLayers());
console.log(neuralNetwork);

*/
