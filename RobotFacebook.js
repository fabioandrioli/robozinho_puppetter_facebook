require('dotenv').config()
const puppeteer = require('puppeteer');


const writeOnTimeline = async (page,notice) => {

    let sentenceList = `Se você estiver lendo este conteudo, saiba que sou um processo,
     automatizado de conteudo, fui desenvolvido por Fábio Gilberto.` +
        "\n\n" +
        notice.title + 
        "\n\n" + 
        notice.urlToImage + 
        "\n\n" + 
        notice.description + 
        "\n\n" + 
        `Author: ${notice.author || 'desconhecido'}` +
        "\n\n" + 
        notice.url +
        "\n\n";

    await page.keyboard.type(sentenceList);
    await page.keyboard.down('Control');
    await page.keyboard.press(String.fromCharCode(13)); // character code for enter is 13
    await page.keyboard.up('Control');
        
    console.log('done');
    await page.click(`[aria-label="No que você está pensando?"]`);
}

 const loginAndPostTimeLine = async (notice) => {

   console.log(notice)
    const browser = await puppeteer.launch({
        headless:false,
        slowMo:20,
    });

    const page = await browser.newPage();

    page.setDefaultNavigationTimeout(1000000);

    await page.setViewport({width: 1000, height:600});

    await page.goto('https://facebook.com');
   

    await page.waitForSelector("#email");

    await page.type("#email",process.env.FACEBOOK_EMAIL);
    await page.type("#pass",process.env.FACEBOOK_PASSWORD);

    await page.click(`[type="submit"]`)
    
    
    await page.waitForNavigation();
    await page.goto('https://www.facebook.com/fabio.gilberto.1');
    const context = browser.defaultBrowserContext();
    
    await context.overridePermissions("https://www.facebook.com/fabio.gilberto.1", ["notifications"]);
    await page.waitForSelector(`div.k4urcfbm.buofh1pr.j83agx80.ll8tlv6m`);
    await page.click(`div.k4urcfbm.buofh1pr.j83agx80.ll8tlv6m`);

    await page.waitForSelector(`[aria-label="No que você está pensando?"]`);
    await page.click(`[aria-label="No que você está pensando?"]`);
    await page.waitForSelector(`[aria-label="No que você está pensando?"]`);
 
    await writeOnTimeline(page,notice)
  
    await browser.close();
}

module.exports = loginAndPostTimeLine;