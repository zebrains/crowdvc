//(function(){
    var app = angular.module('CrowdVC', []);

    app.controller('loginController', function(){
      this.isLoggedIn = false;
      this.userName = '';
      this.firstName = '';

    });

    app.controller('TitleController', function(){
      this.title = "Krowd.VC";

      this.getTitle = function(){
        return this.title;
      };
    });
//})();
