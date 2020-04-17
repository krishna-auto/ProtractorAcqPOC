let taskspage = function(){
    const until = protractor.ExpectedConditions;
    var helper = require('../HelperMethods/Helper');

    let addTask = element(by.xpath("//button//span[contains(text(),'Add Task')]"));
    let taskInputField = element(by.xpath("element(by.xpath('//label[contains(text(),'Title')]/parent::div//input'))"));
    let createButton = element(by.xpath("//button/span[contains(text(),'Create')]"));
    
    this.CreateTask = function(task) {
            helper.clickElement(addTask);
            browser.sleep(2000);
            taskInputField.sendKeys(task);
            createButton.click();
    }
    
};
module.exports = new taskspage();