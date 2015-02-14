Package.describe({
  name: 'wuxianliang:orientdriver',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Meteor.js oriento wrapper to be used with meteor applications (a.k.a. orientdb Connector)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/wuxianliang/orientdriver.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('wuxianliang:orientdriver.js', 'server');
  api.use(['underscore', 'http'], 'server');
  api.use('meteorhacks:npm@1.2.2');
});



Npm.depends({
  oriento: '1.1.2'
});
