import LoginPage from '../pageobjects/login.page';
import DynamicLoadingPage from '../pageobjects/DynamicLoadingPage';
import FileUploadPage from '../pageobjects/FileUploadPage';
import JavaScriptAlertsPage from '../pageobjects/JavaScriptAlertsPage';
import DragAndDropPage from '../pageobjects/DragAndDropPage';
import DownloadPage from '../pageobjects/DownloadPage';
import BasePage from '../pageobjects/BasePage';
import path from 'path';

describe('End-to-End Tests', () => {
    const basePage = new BasePage();

    beforeEach(async () => {
        // Reset browser state before each test
        await browser.reloadSession();
    });

    describe('Valid Login Test', () => {
        beforeEach(async () => {
            await basePage.navigateTo('/login');
        });

        it('should login with valid credentials and show success message', async () => {
            await LoginPage.login('tomsmith', 'SuperSecretPassword!');
            await expect(LoginPage.successMessage).toBeDisplayed();
        });
    });

    describe('Invalid Login Test', () => {
        beforeEach(async () => {
            await basePage.navigateTo('/login');
        });

        it('should show error message with invalid credentials', async () => {
            await LoginPage.login('invalidUser', 'invalidPassword');
            await expect(LoginPage.errorMessage).toBeDisplayed();
        });
    });

    describe('Dynamic Loading Test', () => {
        it('should load a dynamically loaded element', async () => {
            await basePage.navigateTo('/dynamic_loading/2');
            await DynamicLoadingPage.clickStart();
            await DynamicLoadingPage.waitForLoading();
            
            const message = await DynamicLoadingPage.getLoadingMessage();
            await expect(message).toBe('Hello World!');
        });
    });

    describe('File Upload Test', () => {
        it('should upload a file successfully', async () => {
            const fileUploadPage = new FileUploadPage();
            await fileUploadPage.navigateTo('/upload');
            const filePath = path.join(__dirname, '../sampleFile.txt');
            await fileUploadPage.uploadFile(filePath);
            const message = await fileUploadPage.getUploadMessage();
            await expect(message).toContain('File Uploaded!');
        });
    });

    describe('JavaScript Alerts Test', () => {
        let jsAlertsPage;

        beforeEach(async () => {
            jsAlertsPage = new JavaScriptAlertsPage();
            await jsAlertsPage.navigateTo('/javascript_alerts');
        });

        it('should handle basic alert correctly', async () => {
            await jsAlertsPage.triggerAlert();
            const result = await jsAlertsPage.getResultText();
            await expect(result).toContain('You successfully clicked an alert');
        });

        it('should handle confirm dialog correctly', async () => {
            await jsAlertsPage.triggerConfirm();
            const result = await jsAlertsPage.getResultText();
            await expect(result).toContain('You clicked: Ok');
        });

        it('should handle prompt correctly', async () => {
            const promptText = 'Test Input';
            await jsAlertsPage.triggerPrompt(promptText);
            const result = await jsAlertsPage.getResultText();
            await expect(result).toContain(`You entered: ${promptText}`);
        });
    });

    describe('Drag and Drop Test', () => {
        it('should perform drag-and-drop successfully', async () => {
            const dragAndDropPage = new DragAndDropPage();
            await dragAndDropPage.navigateTo('/drag_and_drop');

            const initialColumnAText = await dragAndDropPage.getColumnAText();
            const initialColumnBText = await dragAndDropPage.getColumnBText();

            await dragAndDropPage.dragElementAToElementB();
            await browser.pause(500); // Small pause to ensure the drag operation completes

            const newColumnAText = await dragAndDropPage.getColumnAText();
            const newColumnBText = await dragAndDropPage.getColumnBText();

            await expect(newColumnAText).toBe(initialColumnBText);
            await expect(newColumnBText).toBe(initialColumnAText);
        });
    });


    describe('File Download Test', () => {
        it('should download a file successfully', async () => {
            const downloadPage = new DownloadPage();
            await downloadPage.navigateTo('/download');
            
            const download = await downloadPage.downloadFile();
            await expect(download).toBeTruthy();
        });
    });
});