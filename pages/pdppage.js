const BasePage = require('./BasePage');

class PDPPage extends BasePage {

  constructor(page) {

    super(page);

  }

  async openPDPPage() {

    await this.page.goto(
      'https://www.thesouledstore.com/product/marvel-spider-man-web-slinger-oversized-t-shirts'
    );

    await this.page.waitForLoadState('domcontentloaded');

    await this.page.waitForTimeout(5000);

  }

}

module.exports = PDPPage;