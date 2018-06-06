const notifier = require('node-notifier');
// String
notifier.notify('Ya es Tiempo!');

// Object
notifier.notify({
  title: 'Tenes algo que hacer',
  message: 'No te olvides!'
});
