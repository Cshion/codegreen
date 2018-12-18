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
  
  async existsTaskByDescription(color,description){
    if(!this.tasksList[color]){
      throw new Error("Color no implementado");
    }

    let values = await this.tasksList[color].getText();
    let val = values.find(el => el == description);
    
    return !!val;
  }

  async findIndexTaskByDescription(color,description){
    if(!this.tasksList[color]){
      throw new Error("Color no implementado");
    }
    
    let taskList : ElementArrayFinder = this.tasksList[color];
    let taskFiltered = await taskList.filter(function(el,index){
    let tdDescription = el.all(by.tagName("td")).first();
      return tdDescription.getText().then(function(txt){
        return txt == description;
      });
    });

    console.log(await taskFiltered[0].getText());
  }
}
