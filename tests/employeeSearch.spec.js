const { test, expect } = require('../fixture/fixture.js')
test('employee flow', async ({ loginPage, dashboardPage, page }) => {
    await loginPage.openApplication()
    await loginPage.signIn('Admin', 'admin123')
    await dashboardPage.verifyDashboard()
    await dashboardPage.clickPIM()
    await expect(page).toHaveURL(/viewEmployeeList/)
})