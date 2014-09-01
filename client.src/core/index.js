/*
 * index
 * Bootstrap & start our application
 *
 */

// Load our shims. In general, 'shims' are things that directly modify
// Backbone or Marionette. These shims set this app up to be
// in a Marionette v3-like state. I cannot suggest you use them
// unless you're absolutely sure you know what you're doing!
require('../shims/history-shim');
require('../shims/radio-shim');
require('../shims/to-json-shim');
require('../shims/merge-options-shim');

// Load & start our app
require('./app').start();