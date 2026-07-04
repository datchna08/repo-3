const { test, expect } = require('@playwright/test')
const fs = require('fs')
test('OrangeHRM Login Verification', async ({ page, context }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()
  await expect(page).toHaveURL(/dashboard/)
  //   Employee Search
  // Navigate to PIM.
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
  for (let name of names) {
    console.log(name)
  }
  await suggestedValue.first().click()
  const selectedEmployee = await page.getByPlaceholder('Type for hints...').first().inputValue()
  console.log(`The selected EmployeeName is : ${selectedEmployee}`)

  await Promise.all([page.waitForResponse(res => res.url().includes('/api/') &&
    res.status() === 200),
  page.getByRole('button', { name: 'Search' }).click()])
  const tableCard = page.locator('.oxd-table-card')
  await expect(tableCard).toBeVisible()
  const count = await tableCard.count()
  console.log(`Total employee records is ${count}`)
  const tableName = await page.locator('.oxd-table-card .oxd-table-cell').nth(2).textContent()
  console.log(tableName)
  await expect(selectedEmployee).toContain(tableName)

  const newPage = await context.newPage()
  await newPage.goto('https://testautomationpractice.blogspot.com/')
  await newPage.getByRole('link', { name: 'Download Files' }).click()
  await newPage.locator('#inputText').fill('Employee Report Generated')
  await newPage.getByRole('button', { name: 'Generate and Download Text File' }).click()
  const [Download] = await Promise.all([
    newPage.waitForEvent('download'),
    newPage.getByRole('link', { name: 'Download Text File' }).click()
  ])
  const fileName = Download.suggestedFilename()
  console.log(`Downloaded filename is ${fileName}`)
  await Download.saveAs(`files/${fileName}`)
  const fileExist = fs.existsSync(fileName)
  await expect(fileExist).toBeTruthy()
  await newPage.locator('#singleFileInput').setInputFiles('files/LATEST.pdf')
  await newPage.getByRole('button',{name:'Upload Single File'}).click()
  await expect(newPage.locator('#singleFileStatus')).toContainText('Single file selected:')
  console.log(await newPage.locator('#singleFileInput').inputValue())
  const [popup] = await Promise.all([
    newPage.waitForEvent('popup'),
    newPage.getByRole('button',{name:'Popup Windows'}).click()
  ])
  console.log(`The page tile is ${await popup.title()}`)
  console.log('The page URL is',popup.url())
  await popup.close()
  await newPage.close()
  await expect(page).toHaveURL(/pim/)
  await expect(selectedEmployee).toContain(tableName)
  console.log('Insurance employee claim flow completed successfully')
})