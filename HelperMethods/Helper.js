let helpermethods = function(){
    const until = protractor.ExpectedConditions;

    this.clickElement = function(element){
        browser.wait(until.elementToBeClickable(element,5000)).then(function(){
            element.click(); 
        });
    }
    this.verifyElement  = function(element,expectedstatus){
        var actualstatus  = element.isPresent();
        expect(expectedstatus).toBe(actualstatus);
    }
    this.verifyElementafterAction  = function(element,expectedstatus){
        browser.wait(until.visibilityOf(element,5000)).then(function(){
        var actualstatus  = element.isPresent();
        expect(expectedstatus).toBe(actualstatus);
    })
    }
    this.EnterValue = function(element,value){
        browser.wait(until.visibilityOf(element,5000)).then(function(){
        element.sendKeys(value);
        });
    }
    
};
module.exports = new helpermethods();