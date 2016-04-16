/**
 * Created by younes on 16/04/2016.
 */


//redirection des pages avec ui router
app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("home",{

        url:"/home",
        templateUrl:"pages/home.html",
        controller: "homeCtrl"
    })
        .state("produit",{
            url:"/produit",
            templateUrl:"pages/produit.html",
            controller: "produitCtrl"
        })
        .state("article",{
            url:"/article",
            templateUrl:"pages/article.html",
            controller: "articleCtrl"
        });

})