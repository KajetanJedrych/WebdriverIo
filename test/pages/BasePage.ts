export default class BasePage {
    constructor() {}

    async navigateTo(path: string) {
        await browser.url(path);
    }
}
