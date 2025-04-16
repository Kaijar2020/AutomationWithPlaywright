import {expect,test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Homepage } from '../pages/HomePage';
import { CartPage } from '../pages/cartPage';

test('Login Test in Page Object Model',async({page})=>{

    //Login the Website.
    const login = new LoginPage(page);
    await login._goToLink();
    await login._login('pavanol','test@123')
   await page.waitForTimeout(3000)

    //Add product to the cart
    const home = new Homepage(page)
    await home.addProductTocart("Nexus 6")
    await page.waitForTimeout(2000)
    await home.goToCart()

    //Cart Check
    const cart = new CartPage(page)
    await page.waitForTimeout(3000)
    const status = await cart.checkProduct("Nexus 6")
    expect(status).toBe(true)
    await page.waitForTimeout(2000)
})