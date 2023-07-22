# Release Notes for neurons.me Version 2.3.4:

### New Features:

Added neurons.scripts.getPrototype(obj) method: This new method allows users to easily retrieve the prototype methods of any instance of a class. By passing an object instance as an argument, users can obtain a list of methods available on that object's prototype.
Usage Example:

```js
const neurons = require('neurons.me');
// Create an instance of NeuralNetwork
let myNetwork = new neurons.NeuralNetwork();

// Create an instance of Neuron
let neuron = new neurons.Neuron({
  name: 'x',
  date: '2023-07-25',
  time: '12:30 PM',
  color: 'blue',
  activationFunction: x => x * 2
});

// Get the prototype methods of the NeuralNetwork instance
const neuralNetworkMethods = neurons.scripts.getPrototype(myNetwork);

// Get the prototype methods of the Neuron instance
const neuronMethods = neurons.scripts.getPrototype(neuron);

// Output the results
console.log(myNetwork);
console.log(neuralNetworkMethods);
console.log('-----------');
console.log(neuron);
console.log(neuronMethods);
```

With this new version, users can easily explore and understand the available methods of any instance in the neurons.me library. This can be particularly useful for developers who want to interact with different classes and instances within their applications.

As always, if you encounter any issues or have any feedback, please feel free to report it on our GitHub repository. We appreciate your support and hope this new feature enhances your experience with the neurons.me library.

Thank you for using neurons.me!

Sincerely,
The neurons.me Team