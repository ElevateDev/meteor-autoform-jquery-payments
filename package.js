Package.describe({
  name: 'elevatedevdesign:autoform-jquery-payments',
  summary: 'Autoform package for jquery payments fields',
  version: '0.0.6-rc.1',
  git: 'https://github.com/ElevateDevelopmentAndDesign/' +
    'meteor-autoform-jquery-payments'
});

Package.onUse(function(api) {
  api.use([
    'jquery@1.11.4',
    'templating@1.0.0',
    'jeffpatzer:jquery-payment@0.0.5',
    'blaze@2.0.0',
    'aldeed:autoform@4.0.0 || 5.0.0',
    'aldeed:simple-schema@1.0.0',
    'aldeed:template-extension@4.0.0'
  ]);

  api.addFiles([
    'inputs.html',
    'inputs.js'
  ], 'client');

  api.addFiles([
    'simpleSchemaHelpers.js',
  ]);

  api.export('PaymentsHelpers');
});
