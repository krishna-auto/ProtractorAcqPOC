
describe('EndToEndTest',function(){
    let loginpage = require('./pages/Login');
    let pipelinepage = require('./pages/Pipeline');
    let dealspage = require('./pages/Deals');
    let strategypage = require('./pages/Strategy');
    let taskpage = require('./pages/Tasks');
    it('LaunchBrowser',function() {
        loginpage.launchbrowser();
    },300000)
    it('EnterCredentials',function(){
        loginpage.enterUsername();
        loginpage.enterPassword()
        loginpage.clickLogin();
    },300000)
    it('VerifyPipeline',function(){
        pipelinepage.verifyButton('AddDeal');
    });
    it('AddDeal',function(){
        pipelinepage.clickaddDealButton();
        pipelinepage.EnterDealName('Deal 2');
        pipelinepage.clickButton('next');
        pipelinepage.clickButton('create');
    });
    it('UploadImage',function(){
        dealspage.uploadFileAssetImage();
        
    });
    it('SelectValueFromDropdown',function(){
        dealspage.navigateToTab('Strategy');
        strategypage.selectValuefromOrgDropDown('Your Organization');
    });
    xit('CreateTask',function(){
        dealspage.navigateToTab('Tasks');
        taskpage.CreateTask();
    });
    it('SelectUserGuide',function(){
       pipelinepage.ValidateUserGuide();
    });
    it('LogoutFromApp',function(){
        pipelinepage.LogoutFromApp();
    },30000)

})