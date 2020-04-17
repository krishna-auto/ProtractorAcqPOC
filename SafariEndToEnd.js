
describe('EndToEndTest',function(){
    let loginpage = require('./pages/Login');
    let pipelinepage = require('./pages/Pipeline');
    let dealspage = require('./pages/Deals');
    let modelpage = require('./pages/Models');
    let strategypage = require('./pages/Strategy');
    let taskpage = require('./pages/Tasks');
    it('LaunchBrowser',function() {
        loginpage.launchbrowser();
    },300000)
    it('EnterCredentials',function(){
        loginpage.enterUsername();
        browser.sleep(3000);
        loginpage.enterPassword()
        browser.sleep(3000);
        loginpage.clickLogin();
    },300000)
    
    it('VerifyAddDealButton',function(){
        pipelinepage.verifyButton('AddDeal');
    });
    it('LogoutFromApp',function(){
        pipelinepage.LogoutFromApp();
    },30000)
})