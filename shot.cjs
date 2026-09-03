const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/home/claude/.cache/puppeteer/chrome/linux-131.0.6778.204/chrome-linux64/chrome',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: '/tmp/hero.png' });

  const height = await page.evaluate(() => document.body.scrollHeight);
  await page.screenshot({ path: '/tmp/full.png', fullPage: true });

  // scroll to services section
  await page.evaluate(() => document.querySelector('#services').scrollIntoView());
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: '/tmp/services.png' });

  await page.evaluate(() => document.querySelector('#work').scrollIntoView());
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: '/tmp/work.png' });

  await page.evaluate(() => document.querySelector('#about').scrollIntoView());
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: '/tmp/about.png' });

  await page.evaluate(() => document.querySelector('#contact').scrollIntoView());
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: '/tmp/contact.png' });

  console.log('height', height);
  await browser.close();
})();
