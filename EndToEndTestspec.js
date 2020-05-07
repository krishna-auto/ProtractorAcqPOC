
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
    
    it('VerifyAddDealButton',async function(){
        
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
    it('SelectValueFromDropdown',function(){
        strategypage.navigateToTab('Strategy');
        strategypage.selectValuefromOrgDropDown('Your Organization');
    });
    it('CreateTask',function(){
        taskpage.navigateToTab('Tasks');
        taskpage.CreateTask();
    });
    it('SelectUserGuide',function(){
       pipelinepage.ValidateUserGuide();
    });
    it('NavigatetoModels',function(){
        modelpage.navigateToTab('Models');
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
        //modelpage.VerifyModelCardDetails('Model1','Model Decription Model Decription Model Decription Model Decription');  
    })
    it('DiscardDeal',function(){
        dealspage.ClickEditDealIcon();
        dealspage.clickButton('Discard Deal');
        dealspage.clickDiscardDealPopOverButton();
    })
    it('LogoutFromApp',function(){
        pipelinepage.LogoutFromApp();
    },30000)
})