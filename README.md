# cypress-learning
Creating this project to understand the concept of UI testing using Cypress Automation Tool

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Cypress Support](https://on.cypress.io/support)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Fork this repo

If you want to experiment with running this project in Continuous Integration, you'll need to [fork](https://github.com/AbhinavMittal1202/cypress-learning.git) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/AbhinavMittal1202/cypress-learning.git

## cd into the cloned repo
cd cypress-learning

## install the node_modules
npm install

## start the execution of all the test scripts
npx test

## use to execute the test individually
npx cypress open
```

You can verify this by opening your browser and navigating to: [`http://localhost:8000`](http://localhost:8000)

You should see the Phonecat app up and running. We are now ready to run Cypress tests.

### 3. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/writing-your-first-test)

### 4. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/continuous-integration)

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
