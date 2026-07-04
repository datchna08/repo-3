const { expect } = require('@playwright/test')

exports.HomePage = 
class HomePage{
    /**
     * @param {import('@playwright/test').Page}page
     */
    constructor(page){
        this.page = page
        this.dashboardCheck  = this.page.getByRole('heading',{name:'Dashboard'})
        this.pimPageLink = this.page.getByRole('link',{name:'PIM'})
    }
    async verifyDashboard(){
        await expect(this.dashboardCheck).toBeVisible()
    }
    async clickPIM(){
        await this.pimPageLink.click()
    }
}