const {test,expect} = require('../fixtures/adminPage.js')
test('dashboard',async({adminPage})=>{
    await expect(
adminPage
).toHaveURL(/dashboard/)
})