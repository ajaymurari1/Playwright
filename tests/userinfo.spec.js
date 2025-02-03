const {InventoryPage} = require('../tests/pages/inventory.page')
const {test, expect} = require('@playwright/test')
const {LoginSourceDemo} = require('../tests/pages/login.soucedemo.page')
const {UserinfoPage} = require('../tests/pages/userinfopage')



test.skip('fill user details',async({browser})=> { 
    const context = await browser.newContext()
    const page = await context.newPage()
    const loginsoucedemoPage = new LoginSourceDemo(page) // let objectName = new ClassName()
    const inventoryPage = new InventoryPage(page)
    await loginsoucedemoPage.loginuser()
    await inventoryPage.selectinventory()
    const userinfopage = new UserinfoPage(page)
    await userinfopage.filluserinfo()
    await page.pause()
    //await expect(page).toHaveTitle("Products")
    //await loginPage.dashboard()
    })