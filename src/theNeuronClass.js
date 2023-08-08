/* neurons.me
╔╗╔╔═╗╦ ╦╦═╗╔═╗╔╗╔╔═╗╦  ╔═╗╔═╗╔═╗
║║║║╣ ║ ║╠╦╝║ ║║║║║  ║  ╠═╣╚═╗╚═╗
╝╚╝╚═╝╚═╝╩╚═╚═╝╝╚╝╚═╝╩═╝╩ ╩╚═╝╚═╝
witness our seal _._ suiGn    */
const Module = require('neurons.me/src/Modules');
class Neuron {
  constructor({
    load = null, 
    fromJSON = null, 
    options = {},
    weights = [],
    bias = 0, 
    activationFunction = x => x,
    name = ''} = {}) {
    if (fromJSON) {
      Object.assign(this, fromJSON); // Load properties from JSON
    } else {
        /*properties•   
         ┛     ┛ */
        this.DateTimeCreation = new Date().toISOString();
        this.DateTimeLastUpdate = this.DateTimeCreation;
        this.name = name;
        this.processID = Neuron.incrementProcessID(); // Generate unique ID for each neuron
        Neuron.map.set(this.processID, this); // Add this neuron to the map
        this.modules = {};
            if (load) {
            // Iterate over each module and add its properties directly to `this.modules`
            for (let moduleName in load.getModules()) {
            let moduleInstance = load.getModule(moduleName);
            this.modules[moduleName] = {...moduleInstance};
          }
      }
        Object.assign(this, options);
        this.inputs = [];
        this.outputs = null;
        this.weights = weights;
        this.bias = bias;
        this.activationFunction = activationFunction;
  }
}
/* methods...
┌┬┐┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
│││├┤  │ ├─┤│ │ ││└─┐
┴ ┴└─┘ ┴ ┴ ┴└─┘─┴┘└─┘*/
// Method to add a new module
delete() {
  if (Neuron.map.has(this.processID)) {
    Neuron.map.delete(this.processID);
    return true;
  }
  console.error(`No neuron found with processID: ${this.processID}`);
  return false;
}
addModule(name, module) {
    this.modules[name] = {...module}; 
    }
// Method to remove a module
removeModule(name) {
    delete this.modules[name];
    }
// Method to get a module
getModule(name) {
    return this.modules[name];
    }
// Method to add a Modules Pack to the Neuron
addPack(pack) {
    for (const moduleName in pack.modules) {
    const module = pack.modules[moduleName];
    this.addModule(moduleName, module);
    }};
// Method to update the DateTimeLastUpdate property
updateDateTimeLastUpdate() {
    this.DateTimeLastUpdate = new Date().toISOString();
    }
  
static incrementProcessID() {
// Initialize processID if it doesn't exist yet
    if (typeof this.processID === 'undefined') {
      this.processID = 0;
      }
      // Increment the processID and return it
      return ++this.processID;
    }
    
    serialize() {
      return {
        DateTimeCreation: this.DateTimeCreation,
        DateTimeLastUpdate: this.DateTimeLastUpdate,
        name: this.name,
        processID: this.processID,
        // ... other properties
      };
    }
  
    // Static method to create a neuron object from JSON data
    static deserialize(data) {
      return new Neuron({ fromJSON: data });
    }
  
  };

    Neuron.map = new Map(); // Initialize the map to hold all neurons
    module.exports = Neuron;
