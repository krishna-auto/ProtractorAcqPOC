
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
        loginpage.enterPassword()
        loginpage.clickLogin();
    },300000)
    
    it('VerifyAddDealButton',function(){
        pipelinepage.verifyButton('AddDeal');
    });
    it('AddDeal',function(){
        pipelinepage.clickaddDealButton();
        pipelinepage.EnterDealName('Auto+Deal 2');
        pipelinepage.VerifyDealLabels();
        pipelinepage.clickButton('next');
        pipelinepage.clickButton('create');
    });
    it('UploadImage',function(){
        dealspage.uploadFileAssetImage();
        
    });
    it('NavigatetoModels',function(){
        dealspage.navigateToTab('Models');
    })
    it('AddModelAndVerifyPopup',function(){
        modelpage.clickAddModelButton();
        modelpage.verifyModelHeader();        
    })
    it('CreateModelDetails',function(){
        modelpage.EnterModelDetails();
        modelpage.clickCreate();
        modelpage.VerifyModelName('Model1');
    })
    it('EditModelCardUploadAVUX',function(){
        
    })
    it('CloseModelVerifyModelCard',function(){
        modelpage.clickCloseIcon();
        modelpage.VerifyModelCardDetails('Model1','Model Decription Model Decription Model Decription Model Decription');
    })
    it('uploadavux',function(){
        
    })
    
    it('SelectValueFromDropdown',function(){
        dealspage.navigateToTab('Strategy');
        strategypage.selectValuefromOrgDropDown('Your Organization');
    });
    it('CreateTask',function(){
        dealspage.navigateToTab('Tasks');
        taskpage.CreateTask();
    });
    it('SelectUserGuide',function(){
       pipelinepage.ValidateUserGuide();
    });
    it('DiscardDeal',function(){
        dealspage.ClickEditDealIcon();
        dealspage.clickButton('Discard Deal');
        browser.sleep(1000);
        dealspage.clickButton('Discard Deal');
    })
    it('LogoutFromApp',function(){
        pipelinepage.LogoutFromApp();
    },30000)
})