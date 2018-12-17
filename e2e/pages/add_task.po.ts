import { browser, by, element } from 'protractor';
import { BasePage } from './basepage.po'
import { WebElement } from 'selenium-webdriver';

export class AddTaskPage extends BasePage{
  submitButton: any;
  descriptionInput: any;
  priorityInput: any;
  
  constructor(){
    super();
    this.descriptionInput = element(by.id("task-description"));
    this.priorityInput = element(by.id("task-priority"));
    //this.submitButton = element(by.id('task-form'));
  }

  async setTaskDescription(descripcion){
    await this.descriptionInput.sendKeys(descripcion);
  }

  async setTaskPriority(priority){
    let options = await this.priorityInput.all(by.tagName('option'));
    let option  =  null;
    /*
          | Yellow | Esta es una tarea amarilla de ejemplo |
            | Red    | Esta es una tarea roja de ejemplo     |
    */
    options.forEach(async function(element:WebElement){
        let text = await element.getText();
        if (text == priority){
            await element.click();
            return;
        }
    });
  }

  submitNewTask(){

  }
}
