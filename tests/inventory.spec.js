const {InventoryPage} = require('../tests/pages/inventory.page')
const {test, expect} = require('@playwright/test')
const {LoginSourceDemo} = require('../tests/pages/login.soucedemo.page')



test(' inventory add to cart',async({browser})=> { 
    const context = await browser.newContext()
    const page = await context.newPage()
    const loginsoucedemoPage = new LoginSourceDemo(page) // let objectName = new ClassName()
    const inventoryPage = new InventoryPage(page)
    await loginsoucedemoPage.loginuser()
    await inventoryPage.selectinventory()
    //await page.pause()
    //await expect(page).toHaveTitle("Products")
    //await loginPage.dashboard()
    })


    test('fill user details',async({browser})=> { 
        const context = await browser.newContext()
        const page = await context.newPage()
        const loginsoucedemoPage = new LoginSourceDemo(page) // let objectName = new ClassName()
        const inventoryPage = new InventoryPage(page)
        await loginsoucedemoPage.loginuser()
        await inventoryPage.selectinventory()
        await inventoryPage.filluserinfo()
     //   await page.pause()
        //await expect(page).toHaveTitle("Products")
        //await loginPage.dashboard()
        })