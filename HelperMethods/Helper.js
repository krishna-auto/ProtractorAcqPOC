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
};
module.exports = new helpermethods();