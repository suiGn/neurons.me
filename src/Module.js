const mLearning = require('@sui.gn/mlearning');
const Haiku = require('@sui.gn/haiku');
const cleaker = require('cleaker');
const MonadLisa = require('monadlisa');
const netget = require('netget');
const theVault = require('thevault');

class Module {
  constructor() {
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

const defacto = new Module();
defacto.addModule('mLearning', new mLearning());
defacto.addModule('Haiku', new Haiku());
defacto.addModule('cleaker', new cleaker());
defacto.addModule('Monadlisa', new MonadLisa());
defacto.addModule('netget', new netget());
defacto.addModule('theVault', new theVault());

module.exports = { defacto, Module };
