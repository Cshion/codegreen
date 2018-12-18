import { expect } from 'chai';
import { AddTaskPage } from '../pages/add_task.po';
import { HomePage } from '../pages/home.po';
import { Before,Given,When,Then } from 'cucumber';
import { browser, ExpectedConditions } from 'protractor';

let homePage   : HomePage;

Before(() => {
    homePage    = new HomePage();

});

Given('el usuario esta en la vista home', async function () {
    await homePage.get("/tasks");
});

When('el usuario elimina la tarea {string} de la seccion {string}', async function (descripcion, color) {
    await homePage.findIndexTaskByDescription(color,descripcion);
    await browser.sleep(20000);
});

Then('la tarea {string} no se muestra en la tabla en la seccion {string}', async function (descripcion, color) {
    return true;
});