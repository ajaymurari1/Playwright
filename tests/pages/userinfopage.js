const { InventoryPage } = require("./inventory.page");

class UserinfoPage
{
constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastname = page.locator('#lastName');
    this.postalcode = page.locator('#postal-code');
    this.continuebutton = page.locator('#continue');
  }


  async filluserinfo() {
    // Navigate to the website and log in
    await this.page.goto("https://www.saucedemo.com/");
    await this.firstName.fill("ajay");
    await this.lastname.fill("murari");
    await this.postalcode.fill('262524')
    await this.continuebutton.click();

  }
}
module.exports = { UserinfoPage };