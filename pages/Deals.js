let dealpage = function(){
    const until = protractor.ExpectedConditions;
    var helper = require('../HelperMethods/Helper');
    const fileToUpload = '../files/SamplePNGImage_100kbmb.png';

    let AssetImage = element(by.xpath("//label[contains(text(),'ASSET IMAGE')]//ancestor::div[@class='map-container']//i"));
    let CreateButton = element(by.xpath("//button//span[contains(text(),'Save')]"));
    let inputfileType = element(by.xpath('//input[@type="file"]'));
    let editDealIcon = element(by.xpath('//i[contains(@class,"icon-edit")]'));
    let discardDealPopoverButton = element(by.xpath("//app-warning//span[contains(text(),'Discard Deal')]"));
    
    this.uploadFileAssetImage = function(){
            browser.sleep(4000);
            var path = require('path');
            
            absolutePath = path.resolve(__dirname, fileToUpload);
            AssetImage.click();
            inputfileType.sendKeys(absolutePath);
            CreateButton.click();
            //browser.wait(until.invisibilityOf(element(by.xpath("//div/mat-spinner"))), 10000, 'Element taking too long to appear in the DOM');
            browser.wait(until.presenceOf(element(by.xpath("//label[contains(text(),'ASSET IMAGE')]//ancestor::figure//button"))), 15000, 'Upload Image button is taking too long to appear in the DOM');
        }
    this.ClickEditDealIcon = function(){
        helper.clickElement(editDealIcon);
    }
    this.clickButton = function(buttonName){
        helper.clickElement(element(by.xpath("//button/span[contains(text(),'"+buttonName+"')]")));
    }
    this.clickDiscardDealPopOverButton = function(){
        helper.clickElement(discardDealPopoverButton);
    }

    
};
module.exports = new dealpage();