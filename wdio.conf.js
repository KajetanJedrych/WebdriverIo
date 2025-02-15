exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu']
       }
    },
    {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['--headless']
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        ['html-nice', {
            outputDir: './reports/html-reports', // Directory where reports will be saved
            filename: 'report.html',            // Name of the HTML report file
            reportTitle: 'WebdriverIO Test Report',
            showInBrowser: true,                // Open report automatically after test execution
            collapseTests: false,
            removeOutput: false,
            jsonFolder: './reports/json-reports',  // Folder where JSON reports will be saved
            reportFolder: './reports/html-reports' // Folder where HTML report should be generated
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: function () {
        browser.maximizeWindow();  // Maximizing the browser window before tests
    }
};
