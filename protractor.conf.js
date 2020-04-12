//const { SpecReporter } = require('jasmine-spec-reporter');

const generateConfiguration = () => ({
  allScriptsTimeout: 11000,
  specs: [
    'app.e2e-spec.js'
  ],
  baseUrl: 'http://localhost:4444/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  /*onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }*/
})

module.exports = {
  generateConfiguration,
};