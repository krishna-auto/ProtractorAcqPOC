let strategypage = function(){
    var helper = require('../HelperMethods/Helper');
    const until = protractor.ExpectedConditions;
    const fileToUpload = '../files/SamplePNGImage_100kbmb.png';

    let organizationSelector = element(by.xpath("//label[contains(text(),'organization')]/parent::div//mat-select[contains(@class,'mat-select')]"));
    let CreateButton = element(by.xpath("//button//span[contains(text(),'Save')]"));
    let inputfileType = element(by.xpath('//input[@type="file"]'));
    this.navigateToTab = function(tab) {
        element(by.xpath("//a[contains(text(),'"+tab+"')]")).click();
        browser.wait(until.presenceOf(element(by.xpath("//label[text()='CLIENT']"))), 15000, 'Element taking too long to appear in the DOM');
    }
    this.selectValuefromOrgDropDown = function(orgname){
        helper.clickElement(organizationSelector);
        helper.clickElement(element(by.xpath("//span[contains(text(),'"+orgname+"')]")));
        }
    
};
module.exports = new strategypage();