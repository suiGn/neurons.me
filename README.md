
<img src="https://github.com/suiGn/neurons.me/assets/9565222/414a7a2f-4d1f-4b24-b94c-89d3b168e6d3" alt="SVG Image" width="123" height="123" style="width: 123px; height: 123px;">


# Neurons.me

Neurons.me is a JavaScript module for creating and managing artificial neurons, neural networks, and layers. It allows you to create neurons with custom weights, biases, and activation functions, add them to layers, and organize those layers into neural networks.

### Installing

To install neurons.me, use the following command:

```js
npm install neurons.me
```

### Using Neurons.me

To use neurons.me in your project, you first need to require the module:

```js
const neurons = require('neurons.me');
```

## Approach:

- The neurons.me library provides classes for creating neurons, layers, and neural networks in Node.js.
- Neurons are created using the `createNeuron` function provided by the library. You can create neurons with different options such as custom weights, bias, activation function, or even load pre-defined modules.
- Layers are created using the `Layer` class. A layer holds a collection of neurons.
- Neural networks are created using the `NeuralNetwork` class. A neural network consists of one or more layers.

## Usage:

1. Import the `neurons.me` library: 

   ```js
   let neurons = require('neurons.me');
   ```

2. Create neurons using `new neurons.createNeuron()`. You can pass options such as `load` (for pre-defined modules) or `options` (for custom options).

3. Create a layer using 

   ```js
   new neurons.Layer(). 
   ```

   A layer can hold multiple neurons.

4. Add neurons to the layer using the `addNeuron` method of the layer.

5. Create a neural network using 

6. ```js
   new neurons.NeuralNetwork().
   ```

7. Add layers to the neural network using the `addLayer` method of the neural network.

## Key Points:

- Neurons are created individually using `new neurons.createNeuron()` and can have different options or configurations.
- Layers are created using `new neurons.Layer()`, and each layer can hold multiple neurons.
- Neural networks are created using `new neurons.NeuralNetwork()`, and you can add layers to the neural network using the `addLayer` method.
- When adding layers to a neural network, they are added in the order they are created. The order of the layers in the neural network matters, as it determines the flow of information through the network during forward and backward propagation.

Key Takeaways:

- The `neurons.me` library provides a modular approach to building neural networks, allowing you to create and configure neurons, layers, and neural networks separately.
- By organizing neurons into layers and adding layers to a neural network, you can create complex network architectures.
- Keep in mind the order of layers in a neural network, as it affects the flow of information and the network's behavior during training and prediction.

 Here are some code examples demonstrating the usage of adding layers to neural networks and neurons to layers using the Neurons.me library:

## Adding Layers to a Neural Network:

```js
javascriptCopy code
const neurons = require('neurons.me');

// Create a neural network
const network = new neurons.NeuralNetwork();

// Create layers
const layer1 = new neurons.Layer();
const layer2 = new neurons.Layer();
const layer3 = new neurons.Layer();

// Add layers to the neural network
network.addLayer(layer1);
network.addLayer(layer2);
network.addLayer(layer3);
```

## Adding Neurons to a Layer:

```js
javascriptCopy code
const neurons = require('neurons.me');

// Create a layer
const layer = new neurons.Layer();

// Create neurons
const neuron1 = new neurons.Neuron();
const neuron2 = new neurons.Neuron();
const neuron3 = new neurons.Neuron();

// Add neurons to the layer
layer.addNeuron(neuron1);
layer.addNeuron(neuron2);
layer.addNeuron(neuron3);
```

## Iterating Over Layers of a Neural Network:

```js
javascriptCopy code
const neurons = require('neurons.me');

// Create a neural network
const network = new neurons.NeuralNetwork();

// Create layers
const layer1 = new neurons.Layer();
const layer2 = new neurons.Layer();
const layer3 = new neurons.Layer();

// Add layers to the neural network
network.addLayer(layer1);
network.addLayer(layer2);
network.addLayer(layer3);

// Iterate over layers
network.getLayers().forEach((layer, index) => {
  console.log(`Layer ${index + 1}:`);
  console.log(layer);
});
```

## Iterating Over Neurons of a Layer:

```js
javascriptCopy code
const neurons = require('neurons.me');

// Create a layer
const layer = new neurons.Layer();

// Create neurons
const neuron1 = new neurons.Neuron();
const neuron2 = new neurons.Neuron();
const neuron3 = new neurons.Neuron();

// Add neurons to the layer
layer.addNeuron(neuron1);
layer.addNeuron(neuron2);
layer.addNeuron(neuron3);

// Iterate over neurons
layer.getNeurons().forEach((neuron, id) => {
  console.log(`Neuron ${id}:`);
  console.log(neuron);
});
```

These examples demonstrate how to add layers to a neural network and neurons to a layer using the Neurons.me library. You can customize the number of layers and neurons according to your specific requirements. Additionally, you can perform iterations and modifications on the layers and neurons to achieve the desired network architecture and behavior.

Modules

Once a module is loaded into a neuron, all of the module's properties and methods are available to that neuron, and can be accessed using the `getModule` method:

```js
const defactoModule = neuron3.getModule('defacto');
```

In this example, the `getModule` method is used to access the `defacto` module that was loaded into `neuron3`.

Modules provide a powerful way to extend the functionality of your neurons and tailor them to the specific needs of your project. You can create modules to handle specific tasks, encapsulate complex behaviors, or provide additional data and capabilities to your neurons.

Overall, the `neurons.me` library offers a convenient way to create and organize neurons, layers, and neural networks in Node.js, enabling you to build and experiment with different network architectures for various machine learning tasks.

### Feedback and Contact

We're always interested in hearing about your experiences with our package. If you have any suggestions for improvements, or if you've created something cool with our package, we'd love to hear from you!

You can get in touch with us in the following ways:

Email: admin@neurons.me
Instagram: @jabella.e
We're also interested in understanding how our package is being used. If you're willing to share, please take a moment to reach over.

Please note that your privacy is very important to us. Any information you provide will be kept confidential and will be used solely to help us improve our package.

**Happy Coding!**

Neurons.me offers a flexible and intuitive way to create and manage artificial neurons, layers, and neural networks. We hope you find it useful in your machine learning and artificial intelligence projects. Happy coding!
