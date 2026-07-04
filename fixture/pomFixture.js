const base = require('@playwright/test')
const { AuthPage } = require('../pages/AuthPage.js')
const { HomePage } = require('../pages/DashboardPage.js')
exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new AuthPage(page))
    },
    dashboardPage: async ({ page }, use) => {
        await use(new HomePage(page))
    }
})
exports.expect = base.expect