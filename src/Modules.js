//Packing Modules
class Pack {
  constructor(name) {
    this.name = name; // Name of the Pack
    this.modules = {}; // Object to hold the individual modules
  }
  addModule(name, module) {
    this.modules[name] = module; // Method to add a new module
  }
  removeModule(name) {
    delete this.modules[name]; // Method to remove a module
  }
  getModule(name) {
    return this.modules[name]; // Method to get a module
  }
  getModules() {
    return this.modules; // Method to get all modules
  }
}
const imLearning = require('i.mlearning');
const defacto = new Pack('defacto');
defacto.addModule('i.mLearning', new imLearning());
module.exports = { defacto, Pack };
