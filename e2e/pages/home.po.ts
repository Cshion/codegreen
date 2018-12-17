import { browser, by, element } from 'protractor';

export class HomePage {
  paragraph: any;
  
  constructor(){
    this.paragraph = element(by.css('app-root h1'));
  }

  async navigateTo(route) {
    await browser.get(route);
  }

  getParagraphText() {
    return this.paragraph.getText();
  }
}
