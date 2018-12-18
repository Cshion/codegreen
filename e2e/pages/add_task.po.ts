import { browser, by, element,ElementFinder } from 'protractor';
import { BasePage } from './basepage.po'
import { WebElement } from 'selenium-webdriver';

export class AddTaskPage extends BasePage{
  submitButton    : ElementFinder;
  descriptionInput: ElementFinder;
  priorityInput   : any;
  
  constructor(){
    super();
    this.descriptionInput = element(by.id("task-description"));
    this.priorityInput    = element(by.id("task-priority"));
    this.submitButton     = element(by.id('task-form'));
  }

  async setTaskDescription(descripcion){
    await this.descriptionInput.sendKeys(descripcion);
  }

  async setTaskPriority(priority){
    let options = await this.priorityInput.all(by.tagName('option'));
    //NOTE: Esta busqueda puede ser mejorada
    let textOptions = await Promise.all(options.map(async (o : ElementFinder) => {
      return await o.getText();
    }));

    let indexOption = textOptions.findIndex( e => e == priority);
    await options[indexOption].click();
  }

  async submitNewTask(){
    await this.submitButton.element(by.tagName('button')).click();
  }
}
