const {test,expect} = require('@playwright/test')
test('practice',async({page})=>{
// Open the Parabank application.
// Login with:
// Username: john
// Password: demo
await page.goto('https://parabank.parasoft.com/parabank/')
await page.locator('input[name="username"]').fill('john')
await page.locator('input[name="password"]').fill('demo')

const [response] = await Promise.all([page.waitForResponse(res=>res.url().includes('overview') && res.status()===200),
page.locator('input[value="Log In"]').click()
])
// Verify the user is successfully logged in.
console.log(response.status())
// Click Accounts Overview.
await page.getByRole('link',{name:'Accounts Overview'}).click()
// Verify the Accounts Overview page is displayed.
await expect(page.locator('#overviewAccountsApp')).toBeVisible()
// Print:
// Total number of accounts.
await expect(page.locator('#accountTable')).toBeVisible()
const accounts = page.locator('#accountTable tbody tr')
const count = await accounts.count()
console.log(`Account count is ${count}`)
// Every Account Number.
const accountName = page.locator('#accountTable tbody tr td a')
const names= await accountName.allTextContents()
console.log('The below are the account name:')
for(let name of names){
    console.log(name)
}
// Click the first account number.
await page.locator('#accountTable tbody tr td a').first().click()
// Verify the Account Details page is opened.
await expect(page.getByRole('heading',{name:'Account Details'})).toBeVisible()
// Print the available balance.
const balance = await page.locator('#availableBalance').textContent()
console.log(balance)
// Verify the Account Activity table is visible.
await expect(page.locator('#accountActivity')).toBeVisible()
})