describe('EndToEndTest',function(){
    let loginpage = require('./pages/Login');
    it('LaunchBrowser',function() {
        loginpage.launchbrowser();
    },300000)
})