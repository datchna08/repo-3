exports.LoginPage = 
class LoginPage{
    /**
     * @param {import('@playwright/test').Page}page
     */
    constructor(page){
        this.page = page
        this.userName = page.getByPlaceholder('Username')
        this.password = page.getByPlaceholder('Password')
        this.loginButton = page.locator('#login-button')
    }
    async openWebsite(){
        await this.page.goto('https://www.saucedemo.com/')
    }
}