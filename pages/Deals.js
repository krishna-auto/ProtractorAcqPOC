let dealpage = function(){
    const until = protractor.ExpectedConditions;
    var helper = require('../HelperMethods/Helper');
    const fileToUpload = '../files/SamplePNGImage_100kbmb.png';

    let AssetImage = element(by.xpath("//label[contains(text(),'ASSET IMAGE')]//ancestor::div[@class='map-container']//i"));
    let CreateButton = element(by.xpath("//button//span[contains(text(),'Save')]"));
    let inputfileType = element(by.xpath('//input[@type="file"]'));
    let editDealIcon = element(by.xpath('//i[contains(@class,"icon-edit")]'));
    
    this.navigateToTab = function(tab) {
        element(by.xpath("//a[contains(text(),'"+tab+"')]")).click();
        if(tab.localeCompare('Models'))
            browser.wait(until.presenceOf(element(by.xpath("//div[contains(text(),'Add Model')]"))), 5000, 'Element taking too long to appear in the DOM');
        else if(tab.localeCompare('Strategy'))
            browser.wait(until.presenceOf(element(by.xpath("//label[text()='CLIENT']"))), 5000, 'Element taking too long to appear in the DOM');
    }
    this.uploadFileAssetImage = function(){
            browser.sleep(4000);
            var path = require('path');
            
            absolutePath = path.resolve(__dirname, fileToUpload);
            AssetImage.click();
            inputfileType.sendKeys(absolutePath);
            CreateButton.click();
        }
    this.ClickEditDealIcon = function(){
        helper.clickElement(editDealIcon);
    }
    this.clickButton = function(buttonName){
        helper.clickElement(element(by.xpath("//button/span[contains(text(),'"+buttonName+"')]")));
    }
    
};
module.exports = new dealpage();