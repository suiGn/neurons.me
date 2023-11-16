//Creating neural networks:
//neurons.me/index.js
const path = require('path');
const fs = require('fs');
//const thisFilePath = path.resolve(__dirname, 'index.js');
//const readline = require('readline');
//クラス 
const Neuron = require('neurons.me/src/theNeuronClass');
const Layer = require('neurons.me/src/LayerClass');
const NeuralNetwork = require('neurons.me/src/NeuralNetworkClass');
//scripts
const scripts = require('neurons.me/scripts');
const shell = require('neurons.me/shell');

/**
 * Define paths to the JSON files
  neuronsjson
 */
const neuronsjson = path.join(__dirname, './src/data', 'neurons.json');
/**
 * Define paths to the JSON files
  neuralnetworksjson
 */
const neuralnetworksjson= path.join(__dirname, './src/data', 'neuralnetworks.json');
/**
 * Define paths to the JSON files
  layersjson
 */
const layersjson = path.join(__dirname, 'data', './src/layers.json');
/**
 * Function to read from a JSON file
 * @param {string} filePath - The path to the JSON file
 *  
 */

function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return []; // Return an empty array instead of null
  }
}

// Function to write to a JSON file
function writeJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
  }
}

function createNeuron({ load = null, options = {} } = {}) {
  let neuron = new Neuron({ load, options });
  // Add to the map
  Neuron.map.set(neuron.processID, neuron);
  // Add to the JSON file
  const neuronsData = readJSON(neuronsjson);
  neuronsData.push(neuron.serialize());
  writeJSON(neuronsjson, neuronsData);
  return neuron;
}

function createNeuralNetwork(options = {}) {
  let neuralNetwork = new NeuralNetwork(); // You can pass options if needed
  // Add to the map
  NeuralNetwork.map.set(neuralNetwork.ID, neuralNetwork);
  // Add to the JSON file
  const neuralNetworksData = readJSON(neuralnetworksjson);
  // Implement the serialize method in your NeuralNetwork class
  neuralNetworksData.push(neuralNetwork.serialize());
  writeJSON(neuralnetworksjson, neuralNetworksData);
  return neuralNetwork;
}

function createLayer(options = {}) {
  let layer = new Layer(); // You can pass options if needed
  // Add to the map
  Layer.map.set(layer.layerID, layer);
  // Add to the JSON file
  const layersData = readJSON(layersjson);
  // Implement the serialize method in your Layer class, if not already done
  layersData.push(layer.serialize());
  writeJSON(layersjson, layersData);
  return layer;
}

function loadMe() {
  // Load neurons
  const neuronsData = readJSON(neuronsjson);
  console.log(`Checking neurons.json... ${neuronsData.length} neurons loaded`);
  neuronsData.forEach(data => {
    const neuron = Neuron.deserialize(data);
    Neuron.map.set(neuron.processID, neuron);
  });
  // Load layers
  const layersData = readJSON(layersjson);
  console.log(`Checking layers.json... ${layersData.length} layers loaded`);
  layersData.forEach(data => {
    const layer = Layer.deserialize(data); // Assuming Layer has a deserialize method
    Layer.map.set(layer.layerID, layer);
  });
  // Load neural networks
  const neuralNetworksData = readJSON(neuralnetworksjson);
  console.log(`Checking neuralNetworks.json... ${neuralNetworksData.length} neural networks loaded`);
  neuralNetworksData.forEach(data => {
    const neuralNetwork = NeuralNetwork.deserialize(data);
    NeuralNetwork.map.set(neuralNetwork.ID, neuralNetwork);
  });

  return "Loading complete.";
}

const { Pack, defacto } = require('neurons.me/src/Modules');
module.exports = {
  Neuron: Neuron,
  Layer: Layer,
  NeuralNetwork: NeuralNetwork,
  createNeuron: createNeuron,
  createLayer: createLayer,
  createNeuralNetwork: createNeuralNetwork,
  loadMe: loadMe,
  shell: shell,
  scripts: scripts,
  Pack: Pack,
  defacto: defacto,
  initNeuron: function (neuron) {
    //...
  },
};
console.log("neurons.me loaded.");