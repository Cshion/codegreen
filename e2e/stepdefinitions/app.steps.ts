import {expect} from 'chai';
import { AppPage } from '../pages/app.po';
import {Before,Given,When,Then} from 'cucumber';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

When('entramos al home de la aplicacion', function () {
  page.navigateTo("/");
});

Then('el titulo dice {string}',async function (titulo) {

  let paragraphText = await page.getParagraphText();
  expect(paragraphText).equal(titulo);
});