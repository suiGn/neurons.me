const { exec } = require('child_process');
const index = require('./index');
const Neuron = require('neurons.me/src/theNeuronClass');
const Layer = require('neurons.me/src/LayerClass');
const NeuralNetwork = require('neurons.me/src/NeuralNetworkClass');
const { Pack, defacto } = require('neurons.me/src/Modules');

const checkAndUpdateNeuronsMe = () => {
  console.log('Checking for updates...');
  exec('npx -p npm-check-updates ncu neurons.me', (error, stdout, stderr) => {
    if (error) {
      console.error('Error checking for updates:', error);
      return;
    }
    if (stdout.trim().length === 0) {
      console.log('No updates available for neurons.me.');
      return;
    }
    console.log('The following updates are available for neurons.me:');
    console.log(stdout);
    console.log('Updating neurons.me...');
    exec('npm install neurons.me', (error, stdout, stderr) => {
      if (error) {
        console.error('Error updating neurons.me:', error);
        return;
      }
      console.log('neurons.me updated successfully!');
      console.log('Please note that updating neurons.me will overwrite any unpublished changes in your modules.');
    });
  });
};
const checkUpdates = () => {
  console.log('Checking for updates...');
  exec('npx -p npm-check-updates ncu neurons.me', (error, stdout, stderr) => {
    if (error) {
      console.error('Error checking for updates:', error);
      return;
    }
    if (stdout.trim().length === 0) {
      console.log('No updates available for neurons.me.');
      return;
    }
    console.log('The following updates are available for neurons.me:');
    console.log(stdout);
  });
};

const getPrototype = (obj) => {
  console.log(obj)
  return Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
};

function getMapCount(map) {
  return map ? map.size : 0;
}

// Function to format the constructor arguments
function formatConstructorArgs(classObj) {
  // Get the default values from the constructor object
  const constructor = classObj.prototype.constructor;
  const paramNames = constructor?.toString()
    .match(/\(([^)]*)\)/)?.[1]
    .split(',')
    .map(param => param.trim())
    .filter(param => param !== '');

  // Create an array of argument strings in the format "paramName = defaultValue"
  const constructorArgs = paramNames.map(param => {
    if (param === 'load') {
      return `load = null`;
    } else if (param === 'options') {
      return `options = {}`;
    } else if (param === 'activationFunction') {
      return `activationFunction = x => x`;
    } else {
      return `${param} = ${JSON.stringify(classObj.prototype.constructorArgs[param])}`;
    }
  });

  return constructorArgs.join(', ');
}

// Function to display a class and its methods and properties
function displayClass(className, classObj) {
  const mapCount = getMapCount(classObj.map);
  console.log(`Class ${className}, Instances in map: ${mapCount}`);
  // Format and print the constructor arguments
  const constructorArgs = formatConstructorArgs(classObj);
  console.log(`constructor: constructor({${constructorArgs}})`);

  // Get the methods and properties of the prototype
  const prototypeProps = Object.getOwnPropertyNames(classObj.prototype);
  const methods = [];
  prototypeProps.forEach(prop => {
    if (typeof classObj.prototype[prop] === 'function') {
      methods.push(prop);
    }
  });

  // Get the instance properties of the temporary instance
  const instanceProps = Object.getOwnPropertyNames(new classObj());
  const properties = instanceProps.filter(prop => !methods.includes(prop));

  // Print the methods and properties separately
  console.log('methods:');
  console.log(methods);
  console.log('properties:');
  console.log(properties);
}


// Function to display the properties and methods of an object
function displayObjectPropertiesAndMethods(obj, objName) {
  console.log(objName + ':', Object.keys(obj));
}
// Function to display a ModuleCollection and its modules
function displayPack(moduleCollection) {
  console.log('Module Pack:', moduleCollection.name, ', Loaded:');
  for (const [moduleName, module] of Object.entries(moduleCollection.modules)) {
    displayObjectPropertiesAndMethods(module, moduleName);
  }
}


// Function to format the constructor arguments
function formatConstructorArgs(classObj) {
  // Get the default values from the constructor object
  const constructor = classObj.prototype.constructor;
  const paramNames = constructor?.toString()
    .match(/\(([^)]*)\)/)?.[1]
    .split(',')
    .map(param => param.trim())
    .filter(param => param !== '');

  // Create an array of argument strings in the format "paramName = defaultValue"
  const constructorArgs = paramNames.map(param => {
    if (param === 'load') {
      return `load = null`;
    } else if (param === 'options') {
      return `options = {}`;
    } else if (param === 'activationFunction') {
      return `activationFunction = x => x`;
    } else {
      return `${param}`;
    }
  });

  return constructorArgs.join(', ');
}

function displayCompactClassInfo(className, classObj) {
  const mapCount = getMapCount(classObj.map);
  console.log(`${className} { Instances: Map(${mapCount}) }\nconstructor: new ${className}({${formatConstructorArgs(classObj)}})\nmethods: [${Object.getOwnPropertyNames(classObj.prototype).filter(prop => typeof classObj.prototype[prop] === 'function')}]`);
  console.log(`properties: [${Object.getOwnPropertyNames(new classObj())}]\n`);
  console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
}
// Function to display class information
function displayClassInfo(className, classObj) {
  const mapCount = getMapCount(classObj.map);
  console.log(`${className} { instances: Map(${mapCount}) {} }`);
  const constructorArgs = formatConstructorArgs(classObj);
  console.log(`new ${className}({${constructorArgs}})`);
  console.log('methods:');
  console.log(Object.getOwnPropertyNames(classObj.prototype).filter(prop => typeof classObj.prototype[prop] === 'function'));
  console.log('properties:');
  console.log(Object.getOwnPropertyNames(new classObj()));
}


// Call the displayCompactClassInfo function for each class you want to inspect
function showClassesCompact() {
  console.log("-------------------------------------------------------------------");
  console.log("-----------------------AVAILABLE CLASSES --------------------------");
  console.log("-------------------------------------------------------------------");
    displayCompactClassInfo('Neurons',Neuron);
    displayCompactClassInfo('Layer', Layer);
    displayCompactClassInfo('NeuralNetwork', NeuralNetwork);
    displayCompactClassInfo('Pack', Pack);
  };
  function showClassesExtended() {
  console.log("-------------------------------------------------------------------");
  console.log("------------------AVAILABLE CLASSES EXTENDED ----------------------");
  console.log("-------------------------------------------------------------------");
  displayClass('Neuron', Neuron);
  displayClass('Layer', Layer);
  displayClass('NeuralNetwork', NeuralNetwork);
  displayClass('Pack', Pack);
  };

  function showModuleExports(moduleExports) {
    if (showExports) {
      console.log("-------------------------------------------------------------------");
      console.log("------------------- NEURONS.MODULE.EXPORTS ------------------------");
      console.log("-------------------------------------------------------------------");
      console.log(moduleExports);
    }
  }
  
  function showDefacto() {
  console.log("-------------------------------------------------------------------");
  console.log("------------------------ MODULES LOADED ---------------------------");
  console.log("-------------------------------------------------------------------");
  console.log(defacto);
  };

  function showScriptsLoaded() {
    console.log("--------------------------------------------------------------------");
    console.log("---------------------- SCRIPTS LOADED ------------------------------");
    console.log("--------------------------------------------------------------------");
    console.log(module.exports);
    };
  



module.exports = {
  checkAndUpdateNeuronsMe,
  displayClass,
  displayPack,
  displayObjectPropertiesAndMethods,
  displayCompactClassInfo,
  displayClassInfo,
  checkUpdates,
  getPrototype,
  showClassesCompact,
  showClassesExtended,
  showModuleExports,
  showDefacto,
  showScriptsLoaded,
  getMapCount
};



