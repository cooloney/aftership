aftership = Npm.require('aftership');

Aftership = function (key) {
  var _aftership = new aftership(key);

  return {
    'createTracking': function (trackingNumber, params) {
        return Meteor.wrapAsync(_aftership.createTracking)(trackingNumber, params);
    },

    'getTracking': function (slug, trackingNumber, options) {
      return Meteor.wrapAsync(_aftership.getTracking)(slug, trackingNumber, options);
    },

    'getTrackings': function (options) {
      return Meteor.wrapAsync(_aftership.getTracking)(options);
    },

    'updateTracking': function(slug, trackingNumber, options) {
        return Meteor.wrapAsync(_aftership.updateTracking)(slug, trackingNumber, options);
    },

    'retrackTracking': function(slug, trackingNumber, options) {
        return Meteor.wrapAsync(_aftership.retrackTracking)(slug, trackingNumber, options);
    },

    'deleteTracking': function(slug, trackingNumber, requiredFields) {
        return Meteor.wrapAsync(_aftership.deleteTracking)(slug, trackingNumber, requiredFields);
    },

    'getLastCheckpoint': function (slug, trackingNumber, options) {
        return Meteor.wrapAsync(_aftership.getLastCheckpoint)(slug, trackingNumber, options);
    },

    'getCouriers': function () {
        return Meteor.wrapAsync(_aftership.getCouriers)();
    },

    'detectCouriers': function(trackingNumber, requiredFields, detectMode) {
        return Meteor.wrapAsync(_aftership.detectCouriers)(trackingNumber, requiredFields, detectMode);
    }
  };
};

