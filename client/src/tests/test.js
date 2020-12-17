require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Checkout localhost:3000', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Open App', async function() {
        // Load the page
        await driver.get('http://localhost:3000');
        let title = await driver.getTitle();
        assert.equal(title, 'React App');
    });    // close the browser after running tests
    after(() => driver && driver.quit());
});
