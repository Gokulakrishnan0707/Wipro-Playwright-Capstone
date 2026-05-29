const BasePage = require('./basepage');

class WishlistPage extends BasePage {

  constructor(page) {

    super(page);

  }

  async openWishlistPage() {

    await this.page.goto('https://www.thesouledstore.com/wishlist');

    await this.page.waitForLoadState('domcontentloaded');

    await this.page.waitForTimeout(3000);

  }

}

module.exports = WishlistPage;