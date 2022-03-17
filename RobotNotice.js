
require('dotenv').config()
const puppeteer = require('puppeteer');


 const serachInJBLitoral = async () => {
    const browser = await puppeteer.launch({
        headless:false,
        slowMo:20,
    });

    const page = await browser.newPage();

    page.setDefaultNavigationTimeout(1000000);

    await page.setViewport({width: 1000, height:600});

    await page.goto('https://jblitoral.com.br/');

    await page.waitForNavigation();
    await page.goto('https://jblitoral.com.br/');
    const context = browser.defaultBrowserContext();
       
    //await browser.close();
}

module.exports = serachInJBLitoral;