describe('EndToEndTest',function(){
    let loginpage = require('./pages/Login');
    
    it('LaunchBrowser',function() {
        loginpage.launchbrowser();
    },300000)
    it('EnterCredentials',function(){
        loginpage.enterUsername();
        loginpage.enterPassword()
        loginpage.clickLogin();
    },300000)
    
})