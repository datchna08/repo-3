const base = require('@playwright/test')
exports.test = base.test.extend({
    inventoryPage:
    async({page},use)=>{
        await page.goto('https://www.saucedemo.com/')
        await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await page.waitForURL(/inventory/)
    await use(page)
    }
})

exports.expect = base.expect