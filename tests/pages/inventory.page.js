class InventoryPage {
    constructor(page) {
      this.page = page;
      this.userName = page.locator('#user-name').first();
      this.userPassword = page.locator('#password').last();
      this.loginbutton = page.locator('#login-button');
      this.shoppingcart = page.locator('#shopping_cart_container');
      this.addtocartbutton = page.locator('#checkout');
      this.firstName = page.locator('#first-name');
      this.lastname = page.locator('#last-name');
      this.postalcode = page.locator('#postal-code');
      this.continuebutton = page.locator('#continue');
    }
  
    async selectinventory() {
      // Navigate to the website and log in
      await this.page.goto("https://www.saucedemo.com/");
      await this.userName.fill("standard_user");
      await this.userPassword.fill("secret_sauce");
      await this.loginbutton.click();
  
      //let productName = "Sauce Labs Bike Light";
      let products = this.page.locator(".inventory_item_name"); // Removed trailing space
      let productsCount = await products.count(); // Await the count
      console.log(`Total products found: ${productsCount}`);
      const indicesToAdd = [4, 5]; // Zero-based index (5th and 6th items)

      for (let index of indicesToAdd) {
          if (index < productsCount) {
              let itemText = await products.nth(index).textContent();
              console.log(`Adding to cart: ${itemText.trim()}`);
              await this.page.locator(".inventory_item").nth(index).locator("text=Add to cart").click();
          }
      }
     await this.shoppingcart.click();
     await this.addtocartbutton.click();

    }

    async filluserinfo() {
      // Navigate to the website and log in
    //  await this.page.goto("https://www.saucedemo.com/");
      await this.firstName.fill("ajay");
      await this.lastname.fill("murari");
      await this.postalcode.fill('262524')
      await this.continuebutton.click();
  
    }

  }
  
  module.exports = { InventoryPage };
  