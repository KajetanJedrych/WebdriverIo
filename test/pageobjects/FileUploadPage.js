import BasePage from './BasePage';

export default class FileUploadPage extends BasePage {
    get fileUploadLink() { return $('a=File Upload'); }
    get chooseFileInput() { return $('#file-upload'); }
    get uploadButton() { return $('#file-submit'); }
    get uploadMessage() { return $('h3'); }

    async goToFileUpload() {
        await this.fileUploadLink.click();
    }

    async uploadFile(filePath) {
        await this.chooseFileInput.setValue(filePath);
        await this.uploadButton.click();
    }

    async getUploadMessage() {
        return await this.uploadMessage.getText();
    }
}