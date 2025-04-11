import {test, expect} from '@playwright/test'

test('Assertion Test',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    await expect(page.locator('.header-logo')).toBeVisible();

    await expect(page.locator('#small-searchterms')).toBeEnabled()

})

test('Soft Assertion',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');

    //Hard Assertion
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect(page.locator('.navbar-brand')).toBeVisible();

    //Soft Assertion
    await expect.soft(page).toHaveTitle('STORE12')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})