var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});


// An example configuration file.
exports.config = {
  directConnect: true,

  onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(10000);

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));
    var fs = require('fs-extra');
 
fs.emptyDir('screenshots/', function (err) {
        console.log(err);
    });
 
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
 
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });
  },
    afterLaunch: function (exitCode) {
      return new Promise(function (resolve) {
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
    },
    //HTMLReport called once tests are finished
    onComplete: function () {
      var browserName, browserVersion;
      var capsPromise = browser.getCapabilities();
  
      capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
        platform = caps.get('platform');
  
        var HTMLReport = require('protractor-html-reporter-2');
  
        testConfig = {
          reportTitle: 'Protractor Test Execution Report',
          outputPath: './',
          outputFilename: 'ProtractorTestReport',
          screenshotPath: './screenshots',
          testBrowser: browserName,
          browserVersion: browserVersion,
          modifiedSuiteName: false,
          screenshotsOnlyOnFailure: true,
          testPlatform: platform
        };
        new HTMLReport().from('xmlresults.xml', testConfig);
      });
    },
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
  // 'browserName': 'firefox' 
  'browserName': 'chrome',
  //chromeOptions: {args: ['--headless', "--window-size=1920,1080"]},
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['EndToEndTestspec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  
} 
}
