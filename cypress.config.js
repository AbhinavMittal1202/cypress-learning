const { defineConfig } = require('cypress')
const _ = require('lodash')
const del = require('del');

module.exports = defineConfig({
  projectId: "q3emoa",
  defaultCommandTimeout: 8000,
  includeShadowDom: true,
  chromeWebSecurity: false,
  animationDistanceThreshold: 50,
  screenshotOnRunFailure: true,
  videoCompression: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: true,
      json: true,
    },
  },
  video: true,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    "stagingUrl": "https://www.shop-apotheke.com/nx/login/",
    "apiUrl": "https://www.shop-apotheke.com/webclient/api/",
    "validLoginCreds": {
      "username": "Eren.yilmaz@getnada.com",
      "password": "123456"
    },
    "invalidLoginCreds": {
      "valid_username": "Eren.yilmaz@getnada.com",
      "invalid_username": "Yilmaz.Eren@getnada.com",
      "valid_password": "123456",
      "invalid_password": "InvalidPassword"
    }
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = _.some(results.tests, (test) => {
            return _.some(test.attempts, { state: 'failed' })
          })
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            return del(results.video)
          }
        }
      })
    },
    specPattern: 'cypress/e2e/**',
  },
})