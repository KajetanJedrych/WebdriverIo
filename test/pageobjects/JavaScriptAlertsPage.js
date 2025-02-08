import BasePage from './BasePage';

export default class JavaScriptAlertsPage extends BasePage {
    get jsAlertsLink() { return $('a=JavaScript Alerts'); }
    get jsAlertButton() { return $('button=Click for JS Alert'); }
    get jsConfirmButton() { return $('button=Click for JS Confirm'); }
    get jsPromptButton() { return $('button=Click for JS Prompt'); }
    get resultText() { return $('#result'); }

    async goToJavaScriptAlerts() {
        await this.jsAlertsLink.click();
    }

    async triggerAlert() {
        await this.jsAlertButton.click();
        await browser.acceptAlert();
    }

    async triggerConfirm() {
        await this.jsConfirmButton.click();
        await browser.acceptAlert();
    }

    async triggerPrompt(promptText) {
        await this.jsPromptButton.click();
        await browser.sendAlertText(promptText);
        await browser.acceptAlert();
    }

    async getResultText() {
        return await this.resultText.getText();
    }
}