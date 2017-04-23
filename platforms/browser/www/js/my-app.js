var firstPlayer = document.querySelector('.firstPlayer');
var secondPlayer = document.querySelector('.secondPlayer');
var thirdPlayer = document.querySelector('.thirdPlayer');
var players = [
    firstPlayer.innerHTML,
    secondPlayer.innerHTML,
    thirdPlayer.innerHTML,
];

for (var i = 0; i < 17; i++) {
    var namerand = Math.floor(Math.random() * players.length);
    console.log(namerand);
}


var myApp = new Framework7();
var $$ = Dom7;

var storedData = myApp.formGetData('my-form');

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'work') {
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="work"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})