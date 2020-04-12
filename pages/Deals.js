let dealpage = function(){
    const until = protractor.ExpectedConditions;
    const fileToUpload = '../files/SamplePNGImage_100kbmb.png';

    let AssetImage = element(by.xpath("//label[contains(text(),'ASSET IMAGE')]//ancestor::div[@class='map-container']//i"));
    let CreateButton = element(by.xpath("//button//span[contains(text(),'Save')]"));
    let inputfileType = element(by.xpath('//input[@type="file"]'));
    
    this.navigateToTab = function(tab) {
        element(by.xpath("//a[contains(text(),'"+tab+"')]")).click();
    }
    this.uploadFileAssetImage = function(){
            browser.sleep(4000);
            var path = require('path');
            
            absolutePath = path.resolve(__dirname, fileToUpload);
            AssetImage.click();
            inputfileType.sendKeys(absolutePath);
            CreateButton.click();
        }
    
};
module.exports = new dealpage();