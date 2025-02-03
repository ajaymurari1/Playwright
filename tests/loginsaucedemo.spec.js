const {LoginSourceDemo} = require('../tests/pages/login.soucedemo.page')
const {test,expect} =require("@playwright/test")

test.skip('login to soucedemo',async({browser})=> { 
    const context = await browser.newContext()
    const page = await context.newPage()
    const loginsoucedemoPage = new LoginSourceDemo(page) // let objectName = new ClassName()
    await loginsoucedemoPage.loginuser()
    
    //await expect(page).toHaveTitle("Products")
    //await loginPage.dashboard()
    })