import BasePage from './BasePage';

export default class DownloadPage extends BasePage {
    get fileDownloadLink() { return $('a=File Download'); }
    get downloadFileLink() { return $('a[href="download/webdriverIO.png"]'); }

    async goToFileDownload() {
        await this.fileDownloadLink.click();
    }

    async downloadFile() {
        return await browser.call(async () => {
            return await browser.waitUntil(async () => {
                await this.downloadFileLink.click();
                return true;
            });
        });
    }
}