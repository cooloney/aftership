Package.describe({
  name: 'cooloney:aftership',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A Meteor wrap for npm aftership package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cooloney/aftership',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "aftership": "4.1.4"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('aftership.js', 'server');
  api.export('Aftership', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('cooloney:aftership');
  api.addFiles('aftership-tests.js');
});
