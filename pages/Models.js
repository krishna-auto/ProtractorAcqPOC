let modelpage = function(){
    var helper = require('../HelperMethods/Helper');
    const until = protractor.ExpectedConditions;

    let AddModelButton = element(by.xpath("//button/span[contains(text(),'Add Model')]"));
    let closeIcon = element(by.xpath("//i[contains(@class,'icon-close')]"));
    let CreateButton = element(by.xpath("//button/span[contains(text(),'Create')]"));
    let editModelIcon = element(by.xpath("//i[contains(@class,'icon-edit')]"));
    this.navigateToTab = function(tab) {
        helper.clickElement(element(by.xpath("//a[contains(text(),'"+tab+"')]")));
        browser.wait(until.presenceOf(element(by.xpath("//frame-button//span[contains(text(),'Add Model')]"))), 10000, 'Add model too long to appear in the DOM');
     }
    this.clickAddModelButton = function(){
            helper.clickElement(AddModelButton);
        }
    this.verifyModelHeader = function(){
        helper.verifyElement(element(by.xpath("//div[contains(text(),'Add Model')]")),true);
    }
    this.EnterModelDetails = function(){
        helper.EnterValue(element(by.xpath("//label[contains(text(),'model name')]/parent::div//input")),'Model1');
        helper.EnterValue(element(by.xpath("//label[contains(text(),'model description')]/parent::div//input")),'Model Decription Model Decription Model Decription Model Decription');
    }
    this.clickCreate = function() {
        browser.sleep(1000);
        helper.clickElement(CreateButton);
        browser.wait(until.presenceOf(editModelIcon), 10000, 'Edit model icon is taking too long to appear in the DOM');
    }
    this.VerifyModelName = function(modelname) {
        helper.verifyElement(element(by.xpath("//div[text()='"+modelname+"' and @class='model-name']")),true);
    }
    this.clickCloseIcon = function() {
        helper.clickElement(closeIcon);
        browser.wait(until.visibilityOf(element(by.xpath("//frame-button//span[contains(text(),'Add Model')]"))), 10000, 'Add model is taking too long to appear in the DOM');
    }
    this.VerifyModelCardDetails = function(modelname,modeldescription){
        helper.verifyElementafterAction(element(by.xpath("//label[contains(text(),'"+modelname+"')]")),true);
        //helper.verifyElement(element(by.xpath("//p[contains(text(),'"+modeldescription+"')]")),true);
    }
};
module.exports = new modelpage();