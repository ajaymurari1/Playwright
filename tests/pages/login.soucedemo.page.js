class LoginSourceDemo
{

constructor(page)
{
    this.page = page
    this.userName = page.locator('#user-name').first()
    this.userPassword = page.locator('#password').last()
    this.loginbutton = page.locator('#login-button')


}

async loginuser() {
    await this.page.goto("https://www.saucedemo.com/")
    await this.userName.fill('standard_user')
    await this.userPassword.fill('secret_sauce')
    await this.loginbutton.click()
    

}


}

module.exports = { LoginSourceDemo } 