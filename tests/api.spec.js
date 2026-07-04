const{test,expect}  = require('@playwright/test')
test('Create Employee API',async({request})=>{
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',{
        data:{
            "title":"Patient updated",
  "userId":5
        }
    })
    console.log(response)
    await expect(response).toBeOK()
    const body = await response.json()
    console.log(body)
    expect(body.title).toBe('Patient updated')
     expect(body.userId).toBe(5)
    
})