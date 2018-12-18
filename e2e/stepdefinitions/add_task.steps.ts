import { expect } from 'chai';
import { AddTaskPage } from '../pages/add_task.po';
import { HomePage } from '../pages/home.po';
import { Before,Given,When,Then } from 'cucumber';
import { browser, ExpectedConditions } from 'protractor';

let addTaskpage: AddTaskPage;
let homePage   : HomePage;

Before(() => {
    addTaskpage = new AddTaskPage();
    homePage    = new HomePage();

});

Given('el usuario esta en la vista de añadir tareas', async function () {
    await addTaskpage.get("/task");
});

When('el usuario crea una tarea de color {string} y descripcion {string}',async function (color, descripcion) {
    await browser.wait(ExpectedConditions.visibilityOf(addTaskpage.descriptionInput),20*1000);
    await browser.wait(ExpectedConditions.visibilityOf(addTaskpage.priorityInput),20*1000);


    await addTaskpage.setTaskDescription(descripcion);
    await addTaskpage.setTaskPriority(color);
    await addTaskpage.submitNewTask();
});

Then('la tarea {string} se muestra en la tabla en la seccion {string}', async function (descripcion, color) {
    let exists = await homePage.existsTaskByDescription(color,descripcion);

    return expect(exists).to.be.equal(true);
});

