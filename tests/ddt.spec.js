const {test,expect} = require('@playwright/test')
const loginData = require('../testdata/loginData.json')
for(let data of loginData){
    test(`Login senario - ${data.username || 'blank'}`,async({page})=>{
        await page.goto('https://www.saucedemo.com/')
        await page.getByPlaceholder('Username').fill(data.username)
        await page.getByPlaceholder('Password').fill(data.password)
        await page.locator('#login-button').click()
        if(data.expected === 'success'){
            await expect(page).toHaveURL(/inventory/)
        }
        else{
            await expect(page.locator('.error-button')).toBeVisible()
        }
    })
}