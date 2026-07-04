const { test, expect } = require('@playwright/test')
test.afterEach(async({},testInfo)=>{
    console.log(`${testInfo.status}`)
    console.log(`${testInfo.duration}`)
})
test('OrangeHRM Login Verification @smoke',async ({ page}) => {
    await test.step('login',async()=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()
  await expect(page).toHaveURL(/dashboard/)})
  //   Employee Search
  // Navigate to PIM.
  await test.step('Employee Search',async()=>{
    await Promise.all([
    page.waitForURL(/viewEmployeeList/),
    page.getByRole('link', { name: 'PIM' }).click()
  ])
    // Search employee name: a
  await page.getByPlaceholder('Type for hints...').first().fill('a')
  await page.locator('.oxd-autocomplete-option span').first().waitFor()
  const suggestedValue = page.locator('.oxd-autocomplete-option span')
  const totalSuggestions = await suggestedValue.count()
  console.log(`TotalSuggestions = ${totalSuggestions}`)
  const names = await suggestedValue.allTextContents()
  console.log('All suggestion names')
  })
})
