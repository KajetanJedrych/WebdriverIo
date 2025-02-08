import BasePage from './BasePage';

class DynamicLoadingPage extends BasePage {
    get dynamicLoadingLink() { return $('a=Dynamic Loading'); }
    get example2Link() { return $('a=Example 2: Element rendered after the fact'); }
    get startButton() { return $('#start button'); }
    get loadingMessage() { return $('#finish h4'); }

    async goToDynamicLoading() {
        await this.dynamicLoadingLink.click();
    }

    async selectExample2() {
        await this.example2Link.click();
    }

    async clickStart() {
        await this.startButton.click();
    }

    async waitForLoading() {
        await this.loadingMessage.waitForDisplayed({ timeout: 10000 });
    }

    async getLoadingMessage() {
        return await this.loadingMessage.getText();
    }
}

export default new DynamicLoadingPage();