const BasePage = require('./BasePage');

class PLPPage extends BasePage {

  constructor(page) {
    super(page);

    this.productCards = page.locator('img');

    this.productNames = page.locator('h3');

    this.productPrices = page.locator('span');

    this.breadcrumb = page.locator('nav');

    this.sortDropdown = page.locator('select');

    this.filterSection = page.locator('aside');

  }

  async openMenCategory() {

    await this.navigate('/men');

    await this.page.waitForLoadState('domcontentloaded');

  }

  async clickFirstProduct() {

    await this.productCards.nth(1).click();

  }

}

module.exports = PLPPage;