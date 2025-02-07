export default class BasePage {
    constructor() {}

    async navigateTo(path) {
        const url = `${browser.options.baseUrl}${path}`;
        console.log(`Navigating to: ${url}`);
        await browser.url(url);
        await browser.pause(1000); // Add a small pause to ensure page loads
    }
}