const fs = require('fs');
const { execSync } = require('child_process');

// Default modules to clone
const modules = [
  'netget',
  'mLearning',
  'monads',
  'theVault',
  'cleaker'
];

// Default repository URLs for each module
const module_git_repo_url = {
  netget: 'https://github.com/suiGn/netget',
  mLearning: 'https://github.com/suiGn/mLearning',
  monads: 'https://github.com/suiGn/Monads',
  theVault: 'https://github.com/suiGn/theVault',
  cleaker: 'https://github.com/suiGn/cleaker'
};

// Path to the modules directory
const modulesDir = './modules';

// Check if all default modules are already cloned
if (fs.existsSync(modulesDir) && fs.readdirSync(modulesDir).length === modules.length) {
  console.log('All modules are already cloned. Skipping cloning operation.');
} else {
  for (const module of modules) {
    const moduleDir = `${modulesDir}/${module}`;
    if (!fs.existsSync(moduleDir)) {
      // Clone the module from the default repository URL
      const command = `git clone ${module_git_repo_url[module]} ${moduleDir}`;
      try {
        execSync(command);
        console.log(`Successfully cloned ${module}`);
      } catch (error) {
        console.error(`Failed to clone ${module}: ${error.message}`);
      }
    } else {
      console.log(`Module ${module} already exists. Skipping cloning.`);
    }
  }
}

// Example: Branching a module and using custom profiles
const netgetBranchName = 'my-netget-branch'; // Name of the branch for the netget module
const netgetRepoURL = 'https://github.com/your-username/netget.git'; // Custom repository URL for the netget module

// To switch to the custom profile, update the module repository URL in the package.json file
const packageJsonPath = './package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
packageJson.dependencies.netget = netgetRepoURL;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// After switching the profile, run "npm install" to update the dependencies
// Note: Make sure to provide the correct branch name and repository URL for your custom setup
