// const { test, expect } = require('@playwright/test')
// test('practice', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/')
//   await page.locator('#singleFileInput').setInputFiles('files/LATEST.pdf')
//   await page.getByRole('button', { name: 'Upload Single File' }).click()
//   await expect(page.locator('#singleFileStatus')).toContainText('Single file selected:')
//   const uploadedFilename = await page.locator('#singleFileInput').inputValue()
//   console.log(`The filename is : ${uploadedFilename}`)
//   const [popup] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.getByRole('button', { name: 'Popup Windows' }).click()
//   ])
//   await popup.waitForLoadState()
//   console.log(`Popup title is : ${await popup.title()}`)
//   await expect(popup).toHaveTitle('Selenium')
//   console.log(`Popup URL is : ${popup.url()}`)
//   await popup.close()
//   await page.bringToFront()
//   await page.getByRole('link', { name: 'Download Files' }).click()
//   await page.locator('#inputText').fill('Insurance Claim Approved')
//   await page.locator('#generateTxt').click()
//   const [download] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('link', { name: 'Download Text File' }).click()
//   ])
//   const downloadedFilename = download.suggestedFilename()
//   console.log(downloadedFilename)
//   await download.saveAs(`files/${downloadedFilename}`)
//   console.log('Insurance claim document flow completed successfully')
// })
// // tests/testauto.spec.js
const { test, expect } = require('@playwright/test')
test('practice', async ({ page }) => {
console.log(process.env.BASE_URL)
await page.goto('/');

await page.getByPlaceholder('Username')
.fill(process.env.APP_USERNAME);
console.log(process.env.APP_USERNAME)

await page.getByPlaceholder('Password')
.fill(process.env.APP_PASSWORD);})