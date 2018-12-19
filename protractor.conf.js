// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: ['./e2e/stepdefinitions/**/*.steps.ts'],
    format: 'json:./cucumber_results/results.json',
    strict: true
  },

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options:{
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true
    }
  }],

  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    browser.manage().window().maximize();
    //jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
