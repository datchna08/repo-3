const{test,expect}=require("@playwright/test")

test("dropDown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // // ✅ By visible text
    // await page.locator("//select[@id='country']").selectOption({label:"India"})
    // ✅ By value
    // await page.locator('#country').selectOption({value:'india'})
    // ✅ By index
    // await page.locator('#country').selectOption({index:1})
    // Get All Options (Very Important)
    // const options=await page.locator('#country option').allTextContents();
    // console.log(options)

    // const values = await page.$$('#country option');
    // for(let value of values){
    //     const result= await value.textContent();
    //     console.log(result)
    // }
    // 4. Count Options
    const count = await page.locator('#country option').count();
    console.log(count)
    await page.waitForTimeout(3000)
    gfgf
})