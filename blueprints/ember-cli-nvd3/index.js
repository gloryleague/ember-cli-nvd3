var RSVP = require('rsvp');

module.exports = {
  description: 'Imports NVD3 dependency from Bower',

  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonToProject('ember-nvd3-shim@~0.1.0');
  }
};
