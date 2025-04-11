import { expect,test } from "@playwright/test";

test.skip('Alert with Ok button',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabiling dialog window handeling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alrt')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })


    await page.click('//button[normalize-space()="Alert"]');

    await page.waitForTimeout(5000)
})

test.skip('Confirmation Alerts',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
      //Enabiling dialog window handeling
      page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); //close by using ok button

        //await dialog.dismiss()//close by using cancel button.
    })

    await page.click("//button[@id='confirmBtn']");
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000)
})

test('Promt dialog',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
      //Enabiling dialog window handeling
      page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')

        expect(dialog.defaultValue).toContain('Harry Potter')
        await dialog.accept('Ayon'); //close by using ok button

        //await dialog.dismiss()//close by using cancel button.
    })

    await page.click("//button[@id='promptBtn']");
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Ayon! How are you today?')
    await page.waitForTimeout(5000)
})