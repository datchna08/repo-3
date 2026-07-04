const { test } = require('@playwright/test')

test('Login and Save Session', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.pause()
  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

  await page.context().storageState({
    path: 'playwright/.auth/auth.json'
  })
})
// tests/auth.setup.spec.js