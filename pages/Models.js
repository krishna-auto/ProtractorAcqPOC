let modelpage = function(){
    var helper = require('../HelperMethods/Helper');
    const until = protractor.ExpectedConditions;

    let AddModelButton = element(by.xpath("//button/span[contains(text(),'Add Model')]"));
    let closeIcon = element(by.xpath("//i[contains(@class,'icon-close')]"));
    let CreateButton = element(by.xpath("//button/span[contains(text(),'Create')]"));
    
    this.navigateToTab = function(tab) {
        element(by.xpath("//a[contains(text(),'"+tab+"')]")).click();
    }
    this.clickAddModelButton = function(){
            browser.sleep(4000);
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
        helper.clickElement(CreateButton);
    }
    this.VerifyModelName = function(modelname) {
        helper.verifyElement(element(by.xpath("//div[text()='"+modelname+"' and @class='model-name']")),true);
    }
    this.clickCloseIcon = function() {
        closeIcon.click();
        browser.wait(until.presenceOf(element(by.xpath("//div[contains(text(),'Add Model')]"))), 10000, 'Element taking too long to appear in the DOM');
    }
    this.VerifyModelCardDetails = function(modelname,modeldescription){
        helper.verifyElement(element(by.xpath("//label[contains(text(),'"+modelname+"')]")),true);
        helper.verifyElement(element(by.xpath("//p[contains(text(),'"+modeldescription+"')]")),true);
    }
};
module.exports = new modelpage();