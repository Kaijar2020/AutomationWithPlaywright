import {test,expect} from '@playwright/test'


test('Locators test', async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    // await page.locator('id=login2').click();
    await page.click('id=login2');

    //provide username
    await page.locator('#loginusername').fill("pavanol")

    //provide password
    await page.fill("input[id='loginpassword']", "test@123")

    //Click on Login button
    await page.click("//button[normalize-space()='Log in']")

    // const logoutLink = page.locator("//a[normalize-space()='Log out']")
    // await expect(logoutLink).toBeVisible()

    await page.close()
})

test('Locate Multiple Elements', async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    const links = await page.$$('a');

    for(const link of links){

        const linkText = await link.textContent();
        console.log(linkText);
    }

    await page.close();
})