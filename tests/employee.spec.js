const {test,expect} = require('../fixture/fixture')
test('Verify Products Page',async({inventoryPage})=>{
    await expect(inventoryPage.locator('.header_secondary_container')).toContainText('Products')
})