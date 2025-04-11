import { expect,test } from "@playwright/test";

test('Handle Multiple option from Select Dropwon',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Select Multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue', 'Red', 'Yellow'])
    //Check number of option
    // expect((await page.$$('#colors option')).length).expect(received).toHaveLength(7)


    await page.waitForTimeout(5000)
})