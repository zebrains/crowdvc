(function(){
    var app = angular.module('CrowdVC', []);
    var title = "Crowd.VC";
    app.controller('CrowdController', function(){

    });

    app.controller('loginController', function(){
      this.isLoggedIn = false;
      this.userName = '';
      this.firstName = '';
      
    });
})();
