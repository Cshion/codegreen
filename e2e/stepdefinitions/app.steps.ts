import {expect} from 'chai';
import { HomePage } from '../pages/home.po';
import {Before,Given,When,Then} from 'cucumber';

let page: HomePage;

Before(() => {
  page = new HomePage();
});

When('entramos al home de la aplicacion', function () {
  page.navigateTo("/");
});

Then('el titulo dice {string}',async function (titulo) {

  let paragraphText = await page.getParagraphText();
  expect(paragraphText).equal(titulo);
});