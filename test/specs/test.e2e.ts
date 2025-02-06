import LoginPage from '../pages/LoginPage';

describe('Login Page Tests', () => {
    beforeEach(async () => {
        await LoginPage.navigateTo('/login');
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(LoginPage.successMessage).toBeDisplayed();
        await expect(await LoginPage.successMessage.getText()).toContain('You logged into a secure area!');
    });

    it('should show error with invalid credentials', async () => {
        await LoginPage.login('invalidUser', 'invalidPassword');
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(await LoginPage.errorMessage.getText()).toContain('Your username is invalid!');
    });
});

// test/specs/dynamic-loading.spec.ts
import DynamicLoadingPage from '../pages/DynamicLoadingPage';

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