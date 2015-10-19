# Aftership

A Meteor sync wrap version of all the [Aftership](https://github.com/AfterShip/aftership-nodejs) API

## Example

```
Meteor.methods({

  getTracking : function () {
    var aftership = new Aftership(API_KEY);
    aftership.createTracking(trackingNumber, {slug: 'ups'});
    var tracking = aftership.getTracking('ups', trackingNumber, ['tracking_number','slug','checkpoints']);
    return tracking;
  }
});
```

## APIs

Please refer to [Aftership](https://github.com/AfterShip/aftership-nodejs) API
