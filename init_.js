const fs = require('fs');
const path = require('path');

const moduleList = {
  netget: 'netget',
  mlearning: '@sui.gn/mlearning',
  monads: 'monads',
  theVault: 'thevault',
  cleaker: 'cleaker',
};

const modulesDir = path.join(__dirname, 'node_modules');

// Check if the script is running within the neurons.me package
const isNeuronsMePackage = fs.existsSync(path.join(modulesDir, 'neurons.me'));

if (!isNeuronsMePackage) {
  console.log('MODE: development');

  // Install and initialize modules
  for (const moduleName in moduleList) {
    const modulePath = path.join(modulesDir, moduleList[moduleName]);

    // Check if the module is already installed
    if (!fs.existsSync(modulePath)) {
      console.log(`Installing module: ${moduleList[moduleName]}`);
      // Run npm install for the module
      // ...
    }

    // Check if the module is in the expected format
    const moduleFiles = fs.readdirSync(modulePath);
    const requiredFiles = ['index.js', 'package.json', 'README.md', 'src'];

    if (
      moduleFiles.length !== requiredFiles.length ||
      !requiredFiles.every((file) => moduleFiles.includes(file))
    ) {
      console.log(`Invalid module format: ${moduleName}`);
      // Ask user to delete the module or mark as inactive
      // ...
    } else {
      console.log(`Module ${moduleName} is valid`);
      // Initialize the module
      // ...
    }
  }
} else {
  console.log('Running within neurons.me package, skipping module initialization.');
}
