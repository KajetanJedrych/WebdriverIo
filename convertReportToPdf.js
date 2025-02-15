const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const reportPath = path.resolve(__dirname, './reports/html-reports/report.html');

    await page.goto(`file://${reportPath}`, { waitUntil: 'load' });

    await page.pdf({
        path: './reports/test-report.pdf',
        format: 'A4',
        printBackground: true
    });

    await browser.close();
    console.log('PDF report generated: ./reports/test-report.pdf');
})();
