import { chromium } from 'playwright';

async function main() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    try {
        await page.goto('https://www.google.com');
        const button = await page.$('input[name="btnK"]');
        if (button) {
            console.log('Search button found');
        } else {
            console.log('Search button not found');
        }
    } catch (err) {
        console.error('Error during scraping:', err);
    } finally {
        await browser.close();
    }
}

main();
