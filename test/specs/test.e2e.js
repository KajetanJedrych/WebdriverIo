import LoginPage from '../pageobjects/login.page';
import DynamicLoadingPage from '../pageobjects/DynamicLoadingPage';

describe('End-to-End Tests', () => {
    describe('Login Page Tests', () => {
        beforeEach(async () => {
            await LoginPage.navigateTo('/login');
        });

        it('should login with valid credentials', async () => {
            await LoginPage.login('tomsmith', 'SuperSecretPassword!');
            await expect(LoginPage.successMessage).toBeDisplayed();
            await expect(LoginPage.successMessage).toHaveTextContaining('You logged into a secure area!');
        });

        it('should show error with invalid credentials', async () => {
            await LoginPage.login('invalidUser', 'invalidPassword');
            await expect(LoginPage.errorMessage).toBeDisplayed();
            await expect(LoginPage.errorMessage).toHaveTextContaining('Your username is invalid!');
        });
    });

    describe('Dynamic Loading Tests', () => {
        it('should load dynamic element', async () => {
            await DynamicLoadingPage.navigateTo('/');
            await DynamicLoadingPage.goToDynamicLoading();
            await DynamicLoadingPage.selectExample2();
            await DynamicLoadingPage.clickStart();
            await DynamicLoadingPage.waitForLoading();
            const message = await DynamicLoadingPage.getLoadingMessage();
            await expect(message).toBe('Hello World!');
        });
    });
});