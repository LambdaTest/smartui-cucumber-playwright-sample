const { Given, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('chai');

const credentials = {
    user: process.env.LT_USERNAME || 'srivishnua',
    key: process.env.LT_ACCESS_KEY || 'hoxUgXGOsJwtM5SC0vq1K4nCI2h6FXjUS08M7OgE1bIx8ULQSk',
};

const capabilities = {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
        'platform': 'Windows 10',
        'build': 'Playwright Sample Build',
        'name': 'Playwright Sample Test',
        'user': credentials.user,
        'accessKey': credentials.key,
        'network': true,
        'video': true,
        'console': true,
        'smartUIProjectName': "Testing CucumberJS with PlayWright Sample"
    }
};

Given('I visit the LambdaTest homepage', { timeout: 60 * 1000 }, async function () {
    this.browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.goto('https://www.lambdatest.com/');
});

Then('The page title should be {string}', async function (expectedTitle) {
    try {
        const actualTitle = await this.page.title();
        expect(actualTitle).to.equal(expectedTitle);

        await this.page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
    } catch {
        await this.page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
    }
});

Then('Capture the screenshot for Visual Regression testing with {string}', async function (yourScreenshotName) {
    await this.page.evaluate((_) => { },
        `lambdatest_action: ${JSON.stringify({ action: "smartui.takeScreenshot", arguments: { fullPage: true, screenshotName: yourScreenshotName } })}`); // Add a relevant screenshot name here
    await this.browser.close();
});