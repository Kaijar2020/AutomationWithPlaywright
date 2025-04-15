import {test,expect} from '@playwright/test'

test('Page Screen shoot',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path:'screenshots/'+Date.now()+'.png'})
})

test('Full Page Screen shoot',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path:'screenshots/'+Date.now()+'.png',fullPage:true})
})

test.only('Element Screen shoot',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator("//div[@id='tbodyid']//div[1]//div[1]//div[1]").screenshot({path:'screenshots/'+Date.now()+'.png'})
})