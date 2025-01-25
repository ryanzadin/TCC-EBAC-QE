export const config = {
   
    user: process.env.BROWSERSTACK_USERNAME || 'ryanmoraes_3zFW5j',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BUBh2YBp75XxNQLutByc',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://sample.app',
          buildIdentifier: "${BUILD_NUMBER}",
          browserstackLocal: true
        },
      ]
    ],
    specs: [
        '../test/specs/**/*.js'
    ],
    exclude: [
   
    ],
    maxInstances: 1,
    capabilities: [{

        "platformName": "android",
        "appium:deviceName": "Samsung Galaxy S22 Ultra",
        "appium:platformVersion": "12.0",
        "appium:automationName": "UiAutomator2",
        "appium:app": "bs://4af8ee91d01e6c49610d423aca6c52d8a2f68b42"
        
    }],
    commonCapabilities: {
        'bstack:options': {
          projectName: "Mobile tests TCC",
          buildName: 'browserstack build',
          sessionName: 'BStack parallel webdriverio-appium',
          debug: true,
          networkLogs: true
        }
      },

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
