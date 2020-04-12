let pipelinepage = function(){
    var helper = require('../HelperMethods/Helper');
    const until = protractor.ExpectedConditions;

    let addDealButton = element(by.xpath("//button/span[contains(text(),'Add Deal')]"));
    let DealNameText = element(by.xpath("//label[text()='DEAL NAME']//ancestor::div[@class='deal_name_input']//input"));
    let NextButton = element(by.xpath("//button//span[contains(text(),'Next')]"));
    let CreateButton = element(by.xpath("//button//span[contains(text(),'Create')]"));
    let UserGuide = element(by.xpath("//a[@id='userGuide']/i"));
    this.clickaddDealButton = function(){
        
        helper.clickElement(addDealButton);
    }
    this.EnterDealName  = function(deal){
        DealNameText.sendKeys(deal);
    }
    this.ValidateUserGuide = function(){
        UserGuide.click().then(function() {
            browser.getAllWindowHandles().then(function(handles) {
                var newTabHandle = handles[1];
                browser.switchTo().window(newTabHandle).then(function () {
                    expect(browser.driver.getCurrentUrl()).toContain("help");
                });
                browser.driver.close().then(function(){
                browser.switchTo().window(handles[0]);
                })
            })
        })
    }
    this.clickButton = function(buttonName){
        switch(buttonName){
            case "next":
                browser.wait(until.presenceOf(element(by.xpath("//label[text()='In status']/parent::div//span[contains(@class,'mat-select-value-text')]/span"))), 5000, 'Element taking too long to appear in the DOM');
                helper.clickElement(NextButton);      
                break;
            case "create":
                helper.clickElement(CreateButton); 
                break;
        }
    }
        this.verifyButton = function(buttonName){
            switch(buttonName){
                case "AddDeal":
                    helper.verifyElement(addDealButton,true);
            }
        }
        this.LogoutFromApp = function(){
                element(by.xpath("//i[contains(@class,'icon-account')]")).click();
                element(by.xpath("//div[@class='logout-btn']//button")).click();
        }

};
module.exports = new pipelinepage();