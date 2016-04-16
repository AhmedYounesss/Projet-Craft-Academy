/**
 * Created by younes on 16/04/2016.
 */


//redirection des pages avec ui router
app.config(function($stateProvider,$urlRouterProvider){
//configuration de routeProvider

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("home",{
//url page home
        url:"/home",
        templateUrl:"pages/home.html",
        controller: "homeCtrl"
    })
        //url page produit

        .state("produit",{
            url:"/produit",
            templateUrl:"pages/panel.html",
            controller: "produitCtrl"
        })
        //url page article

        .state("article",{
            url:"/article",
            templateUrl:"pages/article.html",
            controller: "articleCtrl"
        })
        //url fiche contact

        .state("contact",{
        url:"/contact",
        templateUrl:"pages/contact.html",
        controller: "contactCtrl"
    });
})