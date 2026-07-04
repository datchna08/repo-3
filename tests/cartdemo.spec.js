const {test,expect} = require('@playwright/test')
test('practice',async({page})=>{
// Open the website.
await page.goto('https://automationexercise.com/')
await page.waitForLoadState('load')
// Verify the home page is displayed.
const homePage = page.getByRole('link',{name:'Home'})
await expect(homePage).toBeVisible()
// Click Products.
const products = page.getByRole('link',{name:'Products'})
await products.click()
// Verify the Products page opens.
await expect(page).toHaveURL(/products/)
// Search for Blue Top.
const searchTab = page.getByPlaceholder('Search Product')
await searchTab.fill('Blue Top')
// Click Search.
await page.locator('#submit_search').click()
await page.waitForLoadState('networkidle')
// Verify at least one product is displayed.
const productValue = page.locator('.productinfo.text-center p')
const count =await productValue.count()
expect(count).toBeGreaterThan(0)
// Print the total number of products displayed.
console.log(`Total product count is ${count}`)
// Print the name of every product displayed.
for(let i=0;i<count;i++){
    const name = await productValue.nth(i).textContent()
    console.log(`The product name is ${name}`)
}
// Verify Blue Top exists in the search results.
await expect(productValue.filter({hasText:'Blue Top'})).toBeVisible()
// Click View Product for Blue Top.
const searchResult = page.locator('.product-image-wrapper').filter({has:page.locator('p',{hasText:'Blue Top'})})
await searchResult.getByRole('link',{name:'View Product'}).click()
// Verify the product name is Blue Top.
const productView = page.locator('.product-information h2')
await expect(productView).toHaveText('Blue Top')
// Verify the Add to Cart button is enabled.
const addtocartButton = page.getByRole('button',{name:'Add to cart'})
await expect(addtocartButton).toBeEnabled()
})