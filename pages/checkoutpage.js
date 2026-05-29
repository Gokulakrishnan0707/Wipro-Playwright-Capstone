const BasePage = require('./basepage');

class CheckoutPage extends BasePage {

  constructor(page) {

    super(page);

  }

  async openCheckoutPage() {

    await this.page.goto('https://www.thesouledstore.com/checkout');

    await this.page.waitForLoadState('domcontentloaded');

    await this.page.waitForTimeout(3000);

  }

}

module.exports = CheckoutPage;