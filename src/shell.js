// neurons.me/shell.js
const Neuron = require('neurons.me/src/theNeuronClass');
const Layer = require('neurons.me/src/LayerClass');
const NeuralNetwork = require('neurons.me/src/NeuralNetworkClass');
const { Pack, defacto } = require('neurons.me/src/Modules');
const introText = `
__
|@@|
\\--/             ニューロン
┌┐┌┌─┐┬ ┬┬─┐┌─┐┌┐┌┌─┐ ┌┬┐┌─┐
│││├┤ │ │├┬┘│ ││││└─┐ │││├┤ 
┘└┘└─┘└─┘┴└─└─┘┘└┘└─┘o┴ ┴└─┘                                                                                                              
One neuron at the time.
--------------------------------
Build and work with neural networks effortlessly:
- Neuron: The fundamental building block of neural networks.
- Layer: Organize neurons into layers for easy network design.
- NeuralNetwork: Create complex neural network architectures.
- Pack: A collection of modules.
- defacto: a default module collection.

Get started now and let neurons.me supercharge your AI projects!
For more information, visit: https://neurons.me

You can use the 'neurons' object to access these modules and start your AI journey.

Usage:
const neurons = require('neurons.me');
neurons.createNeuron({ ... }); // Create a new neuron.
Run .me suite:
npm install this.me
--------------------------------
`;


module.exports = function(rl) {
  return {
    init: function() {
      console.log(introText);
      console.log('\nWelcome to neurons.me');
      console.log('1. Neurons: Create, list, update, and delete neurons');
      console.log('2. Neural Networks: Create, list, update, and delete neural networks');
      console.log('3. Layers: Create, list, update, and delete layers');
      console.log('0. Back to .me shell');
      rl.setPrompt('Select option (neurons.me)> '); // Set a new prompt
      rl.prompt();
      rl.on('line', (input) => {
        switch (input.trim()) {
          case '1':
            console.log('Handling Neurons...');
            // Implement logic for handling Neurons
            break;
            case '0':
              console.log('Returning to .me main menu...');
              rl.removeAllListeners('line'); // Remove the neurons.me shell's listener
              if (typeof backToMainCallback === 'function') {
                backToMainCallback(); // Call the callback to go back to the main menu
              } else {
                console.log('this.me not found. Please be sure to install npm i this.me');
              }
              break;
          // ...
        }
        rl.prompt(); // Prompt again inside this listener
      });
    },
    // Other shell-related functions...
  };
};

