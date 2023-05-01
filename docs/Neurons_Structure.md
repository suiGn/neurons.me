---
title: 'neurons.me Data Structure'
date: '2023-04-27'
---

# neurons.me Data Structure and Modules

**To use the modules within the `neurons.me` package**, you will need to **first install the package as a dependency** in your project. 

You can do this by running: 

```nodejs
npm install neurons.me
```

Once you have installed the package, you can import the specific module you need using the following syntax:

```javascript
const moduleName = require('neurons.me/moduleName');
```

For example, if you wanted to use the `netget` module, you would import it like this:

```js
const netget = require('neurons.me/netget');
```

Similarly, you can import other modules like `theVault`, `mLearning`, and `monad` by specifying their names in the `require` statement.

It's worth noting that each module within `neurons.me` may have its own set of dependencies, and those dependencies may be installed separately for each module. This means that you may need to install additional dependencies if you plan to use multiple modules.

**Also, keep in mind that `neurons.me` is designed as a single package with multiple modules, so there is no need to install the individual modules separately. You can simply install `neurons.me` and access the modules you need using the `require` syntax mentioned above.**