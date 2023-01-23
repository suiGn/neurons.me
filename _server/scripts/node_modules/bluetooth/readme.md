# bluetooth [![Build Status](https://travis-ci.org/gillstrom/bluetooth.svg?branch=master)](https://travis-ci.org/gillstrom/bluetooth)

> Get or set Bluetooth state.

*Currently OS X systems only*


## Install

```
$ npm install --save bluetooth
```


## Usage

```js
const bluetooth = require('bluetooth');

bluetooth.isOn().then(state => {
	console.log(state);
	//=> false
});

bluetooth.on().then(state => {
	console.log('Bluetooth state changed to on');
});

bluetooth.off().then(state => {
	console.log('Bluetooth state changed to off');
});

bluetooth.toggle().then(state => {
	console.log('Bluetooth state changed to on');
});
```


## CLI

```
$ npm install --global bluetooth
```

```
$ bluetooth --help

  Example
    $ bluetooth
    $ bluetooth on
    $ bluetooth off
```


## API

### .isOn()

Check if bluetooth is on or off. Returns a promise for a `boolean`.

### .on()

Turn bluetooth on. Returns a promise.

### .off()

Turn bluetooth off. Returns a promise.

### .toggle([force])

Toggle the bluetooth state. Returns a promise.

#### force

Type: `boolean`

Force a state when toggling.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
