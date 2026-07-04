const {test,expect} = require('@playwright/test')
const {AuthPage}    = require('../pages/AuthPage.js')
test('Dashboard Validation',async({page})=>{
    const authPage = new AuthPage(page)
    await authPage.openApplication()
    await authPage.signIn('Admin','admin123')
    console.log(await page.title())
})