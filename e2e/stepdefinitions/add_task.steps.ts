import {expect} from 'chai';
import { AddTaskPage } from '../pages/add_task.po';
import {Before,Given,When,Then} from 'cucumber';
import { browser, ExpectedConditions } from 'protractor';

let addTaskpage: AddTaskPage;

Before(() => {
    addTaskpage = new AddTaskPage();
});

Given('el usuario esta en la vista de añadir tareas', async function () {
    await addTaskpage.navigateTo("task");
    return true;
});

When('el usuario crea una tarea de tipo {string} y descripcion {string}',async function (tipo, descripcion) {
    await browser.wait(ExpectedConditions.visibilityOf(addTaskpage.descriptionInput),20*1000);
    await browser.wait(ExpectedConditions.visibilityOf(addTaskpage.priorityInput),20*1000);


    await addTaskpage.setTaskDescription(descripcion);
    await addTaskpage.setTaskPriority(tipo);

    //await addTaskpage.setTaskPriority(tipo);
    //return true;
});

Then('la tarea {string} se muestra en la tabla en la seccion {string}', function (descripcion, tipo) {
    // Write code here that turns the phrase above into concrete actions
    console.log(tipo,descripcion);
    return true;
});