const BasePage = require('./BasePage');

class CartPage extends BasePage {

  constructor(page) {
    super(page);

    this.images = page.locator('img');

    this.buttons = page.locator('button');

    this.body = page.locator('body');

  }

  async openCartPage() {

    await this.navigate('/cart');

    await this.page.waitForLoadState('domcontentloaded');

  }

  async refreshCart() {

    await this.page.reload();

    await this.page.waitForLoadState('domcontentloaded');

  }

}

module.exports = CartPage;