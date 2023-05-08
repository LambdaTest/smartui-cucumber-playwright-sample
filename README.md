# Cucumber Playwright Sample for SmartUI

This repository demonstrates how to use Cucumber with Playwright for end-to-end testing, including connecting to LambdaTest Grid for cross-browser testing and Visual Regression testing using Smart UI.

## Prerequisites

- Node.js (version >= 14)
- An account on LambdaTest (sign up for a free account [here](https://www.lambdatest.com/))

## Setup

1. Clone this repository:

```bash
git clone https://github.com/your_username/cucumber-playwright-sample.git
```

2. Change into the repository directory:

```bash
cd cucumber-playwright-sample
```

3. Install the dependencies:

```bash
npm install
```

4. Set up your LambdaTest credentials. Replace `<your_username>` and `<your_accessKey>` with your LambdaTest username and access key:

```bash
export LT_USERNAME=<your_username>
export LT_ACCESS_KEY=<your_accessKey>
```

## Running the tests

To run the tests, use the following command:

```bash
npm test
```

This will execute the Cucumber tests with Playwright, connecting to the LambdaTest Grid for cross-browser testing, and capturing screenshots for Visual Regression testing using Smart UI.

## Customizing the tests

You can customize the test configuration by modifying the `capabilities` object in the `steps.js` file. For example, you can change the browser, browser version, or platform by changing the respective values.

```javascript
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
        'smartUI.project': "Testing CucumberJS with PlayWright Sample"
    }
};
```

Additionally, you can add more tests by creating new `.feature` files in the `features` directory and implementing the step definitions in the `features/step_definitions` directory.

## Learn more

- [Cucumber Documentation](https://cucumber.io/docs)
- [Playwright Documentation](https://playwright.dev/)
- [LambdaTest Documentation](https://www.lambdatest.com/support/docs/)