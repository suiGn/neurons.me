const { exec } = require('child_process');
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

module.exports = {
  checkAndUpdateNeuronsMe,
  checkUpdates,
  getPrototype
};






