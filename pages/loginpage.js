const BasePage = require('./BasePage');

class LoginPage extends BasePage {

  constructor(page) {
    super(page);

    this.body = page.locator('body');

    this.buttons = page.locator('button');

    this.links = page.locator('a');

    this.inputs = page.locator('input');

  }

  async openLoginPage() {

    await this.navigate('/login');

    await this.page.waitForLoadState('domcontentloaded');

    await this.page.waitForTimeout(3000);

  }

  async refreshPage() {

    await this.page.reload();

    await this.page.waitForLoadState('domcontentloaded');

  }

}

module.exports = LoginPage;