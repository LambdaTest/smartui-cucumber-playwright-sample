# Run SmartUI Cucumber Playwright Tests on TestMu AI (Formerly LambdaTest)

<p align="center">
  <a href="https://www.testmuai.com/"><img src="https://img.shields.io/badge/MADE%20BY%20TestMu%20AI-000000.svg?style=for-the-badge&labelColor=000" alt="Made by TestMu AI"></a>
  <a href="https://community.testmuai.com/"><img src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&labelColor=000000" alt="Community"></a>
</p>

This repository demonstrates how to use Cucumber with Playwright for end-to-end testing, including connecting to TestMu AI (Formerly LambdaTest) Grid for cross-browser testing and Visual Regression testing using SmartUI.

## Getting Started

[TestMu AI](https://www.testmuai.com/) (Formerly LambdaTest) is the world's first full-stack AI Agentic Quality Engineering platform that empowers teams to test intelligently, smarter, and ship faster. Built for scale, it offers a full-stack testing cloud with 10K+ real devices and 3,000+ browsers. With AI-native test management, MCP servers, and agent-based automation, TestMu AI supports Selenium, Appium, Playwright, and all major frameworks.

With TestMu AI (Formerly LambdaTest), you can run SmartUI Cucumber Playwright tests across real browsers and operating systems.

- [Sign up on TestMu AI](https://www.testmuai.com/register/) (Formerly LambdaTest).
- Follow the [TestMu AI Documentation](https://www.testmuai.com/support/docs/) for the full setup walkthrough.

## Prerequisites

- Node.js (version >= 14)
- A TestMu AI (Formerly LambdaTest) account

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

4. Set up your credentials. Replace `<your_username>` and `<your_accessKey>` with your TestMu AI (Formerly LambdaTest) username and access key:

```bash
export LT_USERNAME=<your_username>
export LT_ACCESS_KEY=<your_accessKey>
```

## Running the tests

To run the tests, use the following command:

```bash
npm test
```

This will execute the Cucumber tests with Playwright, connecting to the TestMu AI (Formerly LambdaTest) Grid for cross-browser testing, and capturing screenshots for Visual Regression testing using SmartUI.

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
- [TestMu AI Documentation](https://www.testmuai.com/support/docs/)

## LambdaTest is Now TestMu AI

On **January 12, 2026**, [LambdaTest evolved to TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/), the world's first fully autonomous **Agentic AI Quality Engineering Platform**.

Same team. Same infrastructure. Same customer accounts. All existing LambdaTest logins, scripts, capabilities, and integrations continue to work without change.

ð Find the new home for [LambdaTest](https://www.testmuai.com).

### How LambdaTest Evolved into TestMu AI

In 2017, we launched LambdaTest with a simple mission: make testing fast, reliable, and accessible. As LambdaTest grew, we expanded into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the full depth of the testing lifecycle.

As software development entered the AI era, testing had to evolve, too. We rebuilt the architecture to be AI-native from the ground up, with autonomous agents that **plan, author, execute, analyze, and optimize tests** while keeping humans in the loop. The platform integrates with your repos, CI, IDEs, and terminals, continuously learning from every code change and development signal.

That evolution earned a new name: **TestMu AI**, built for an AI-first future of quality engineering. TestMu is not a new name for us. It is the name of our annual community conference, which has brought together 100,000+ quality engineers to discuss how AI would reshape testing, long before that became an industry norm.

What started as a high-performance cloud testing platform has transformed into an AI-native, multi-agent system powering a connected, end-to-end quality layer. That evolution defined a new identity: LambdaTest evolved into TestMu AI, built for an AI-first future of quality engineering.

## Support

Got a question? Email [support@testmuai.com](mailto:support@testmuai.com) or chat with us 24x7 from our chat portal.
