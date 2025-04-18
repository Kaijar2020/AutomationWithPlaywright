import {test,expect,browsers, chromium} from '@playwright/test'

test.skip('manage Multiple pages/Tab',async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const allPages = context.pages()
    console.log("No of page created : ",allPages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")
})

test('Handle Multiple pages/Tab',async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    // const page2 = await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagePromise = context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newpage = await pagePromise
    await expect(newpage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")

    await browser.close()
})