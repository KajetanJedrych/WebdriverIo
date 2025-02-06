import BasePage from './BasePage';

class LoginPage extends BasePage {
    get username() { return $('#username'); }
    get password() { return $('#password'); }
    get loginButton() { return $('button[type="submit"]'); }
    get successMessage() { return $('.flash.success'); }
    get errorMessage() { return $('.flash.error'); }

    async login(username: string, password: string) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();