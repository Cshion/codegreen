import { browser, by, element } from 'protractor';

export class BasePage {
    
  async navigateTo(route) {
    await browser.get(route);
  }
}
