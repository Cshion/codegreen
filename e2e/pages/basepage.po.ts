import { browser, by, element } from 'protractor';

export class BasePage {
    
  async navigateTo(route) {
    await browser.get(route);
  }

  async locateTo(route) {
    await browser.setLocation(route);
  }

  async get(route){
    await browser.get(route);
  }
}
