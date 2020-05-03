let taskspage = function(){
    const until = protractor.ExpectedConditions;
    var helper = require('../HelperMethods/Helper');

    let addTask = element(by.xpath("//button//span[contains(text(),'Add Task')]"));
    let taskInputField = element(by.xpath("element(by.xpath('//label[contains(text(),'Title')]/parent::div//input'))"));
    let createButton = element(by.xpath("//button/span[contains(text(),'Create')]"));
    this.navigateToTab = function(tab) {
        element(by.xpath("//a[contains(text(),'"+tab+"')]")).click();
        browser.wait(until.visibilityOf(element(by.xpath("//button//span[contains(text(),'Add Task')]"))), 15000, 'Add task taking too long to appear in the DOM');
    }
    this.CreateTask = function(task) {
            helper.clickElement(addTask);
            helper.EnterValue(taskInputField,task);
            createButton.click();
    }
    
};
module.exports = new taskspage();