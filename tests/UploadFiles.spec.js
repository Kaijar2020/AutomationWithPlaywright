import {test,expect} from '@playwright/test'

test.skip('Upload Single files',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com')
    await page.waitForSelector("//input[@id='singleFileInput']")
    await page.locator("//input[@id='singleFileInput']").setInputFiles('../playwright-report/atlys_visa_photo.png')

    await page.locator("//button[normalize-space()='Upload Single File']").click()

    await page.waitForTimeout(6000);
})

test('Upload Multiple Fiels', async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload')
    .setInputFiles(['../tests-examples/get_start_btn.png', '../tests-examples/get_start_btn.png'])

    await expect(page.locator('#fileList lo:nth-child(1)')).toHaveText('get_start_btn')

    await page.waitForTimeout(4000);
})
