exports.AuthPage = 
class AuthPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page
        this.usernameTextbox = page.getByPlaceholder('Username')
        this.passwordTextbox = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    async openApplication(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    async signIn(username,password){
        await this.usernameTextbox.fill(username)
        await this.passwordTextbox.fill(password)
        await this.loginButton.click()
    }
}