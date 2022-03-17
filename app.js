const puppeteer = require('puppeteer');

    (async () => {
    const browser = await puppeteer.launch({
        headless:false,
        slowMo:20,
    });

    const page = await browser.newPage();

    page.setDefaultNavigationTimeout(1000000);

    await page.setViewport({width: 1000, height:600});

    await page.goto('https://facebook.com');
   

    await page.waitForSelector("#email");

    await page.type("#email","");
    await page.type("#pass","");

    await page.click(`[type="submit"]`)
    
    
    await page.waitForNavigation();
    await page.goto('https://www.facebook.com/fabio.gilberto.1');
    const context = browser.defaultBrowserContext();
    
    await context.overridePermissions("https://www.facebook.com/fabio.gilberto.1", ["notifications"]);
    await page.waitForSelector(`div.k4urcfbm.buofh1pr.j83agx80.ll8tlv6m`);
    await page.click(`div.k4urcfbm.buofh1pr.j83agx80.ll8tlv6m`);

    await page.waitForSelector(`[aria-label="No que você está pensando?"]`);
    await page.click(`[aria-label="No que você está pensando?"]`);
    let sentenceList = [
        `Eu amo minha esposa Larissa Soriani`,
    ];

    for (let j = 0; j < sentenceList.length; j++) {
        let sentence = sentenceList[j];
        for (let i = 0; i < sentence.length; i++) {
            await page.keyboard.press(sentence[i]);
            if (i === sentence.length - 1) {
                await page.keyboard.down('Control');
                await page.keyboard.press(String.fromCharCode(13)); // character code for enter is 13
                await page.keyboard.up('Control');
        

                console.log('done');
                await page.click(`[aria-label="No que você está pensando?"]`);
            }
        }
    }
  
    await browser.close();
})();