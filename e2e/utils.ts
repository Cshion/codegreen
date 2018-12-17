import { browser, by, element } from 'protractor';

export class Utils {
    
  async navigateTo(route) {
    await browser.get(route);
  }
}
