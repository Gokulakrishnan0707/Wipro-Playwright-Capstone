const BasePage = require('./BasePage');

class HomePage extends BasePage {

  constructor(page) {
    super(page);

    this.menMenu = page.locator('a').filter({ hasText: 'Men' }).first();

    this.womenMenu = page.locator('a').filter({ hasText: 'Women' }).first();

  }

  async openHomePage() {

    await this.navigate('/');

    await this.page.waitForLoadState('domcontentloaded');

  }

}

module.exports = HomePage;