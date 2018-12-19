import { browser, by, element, ElementFinder} from 'protractor';
import { BasePage } from './basepage.po';
import { ElementArrayFinder } from 'protractor/built/element';

export class HomePage extends BasePage{
  tasksList   : {};
  
  constructor(){
    super();
    this.tasksList = {};
    this.tasksList["Red"]         = element(by.id('tasks-red')).element(by.tagName('table')).element(by.tagName('tbody')).all(by.tagName('tr'));
    this.tasksList["Green"]       = element(by.id('tasks-green')).element(by.tagName('table')).element(by.tagName('tbody')).all(by.tagName('tr'));
    this.tasksList["Yellow"]      = element(by.id('tasks-yellow')).element(by.tagName('table')).element(by.tagName('tbody')).all(by.tagName('tr'));
  }
  
  async findItemsByDescription(taskList,description){
    let taskFiltered = await taskList.filter(function(el,index){
      let tdDescription = el.all(by.tagName("td")).first();
        return tdDescription.getText().then(function(txt){
          return txt == description;
        });
      });

    return taskFiltered;
  }

  async existsTaskByDescription(color,description){
    if(!this.tasksList[color]){
      throw new Error("Color no implementado");
    }

    let taskFiltered = await this.findItemsByDescription(this.tasksList[color],description);
    return !!taskFiltered[0];
  }

  async deleteItem(color,description){
    if(!this.tasksList[color]){
      throw new Error("Color no implementado");
    }
    
    let taskFiltered = await this.findItemsByDescription(this.tasksList[color],description);

    await taskFiltered[0].element(by.className("remove-task")).click();
  }
}
