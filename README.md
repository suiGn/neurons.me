# Installing neurons.me using Javascript.

```bash
npm install neurons.me
```

If you want to install modules like the cleaker and netget through the neurons.me package, you can do so by:

```js
const neurons = require('neurons.me');
const { cleaker, mLearning, netget } = neurons;

// Use the functionalities of the netget module
netget.listen(3000);
netget.connect('localhost', 3000);

// Use the functionalities of the cleaker module
// ... (add your code here)
```



In your package.json file is a list of the modules as dependencies:

```js
"dependencies": {
 "netget": "https://github.com/suiGn/netget",
 "mLearning": "https://github.com/suiGn/mLearning",
 "monads": "https://github.com/suiGn/Monads",
 "theVault": "https://github.com/suiGn/theVault",
 "cleaker": "https://github.com/suiGn/cleaker"
  }
```



