const BasePage = require('./BasePage');

class SearchPage extends BasePage {

  constructor(page) {
    super(page);

    this.searchInput = page.locator('input').first();

  }

  async openHomePage() {

    await this.navigate('/');

    await this.page.waitForLoadState('domcontentloaded');

  }

  async searchProduct(product) {

    await this.searchInput.fill(product);

    await this.page.keyboard.press('Enter');

    await this.page.waitForTimeout(3000);

  }

}

module.exports = SearchPage;