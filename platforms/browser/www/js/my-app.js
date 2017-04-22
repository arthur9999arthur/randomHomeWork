var myApp = new Framework7();
var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

myApp.onPageInit('work', function (page) {
    // Do something here for "about" page
})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'work') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="work"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

var storedData = myApp.formGetData('my-form');

var randomWork = document.querySelector('.randomWork');
var firstPlayer = document.querySelector('.firstPlayer');
var secondPlayer = document.querySelector('.secondPlayer');
var players = [
    firstPlayer.innerHTML,
    secondPlayer.innerHTML,
];
randomWork.onclick = function(){
    alert(players[namerand] + '  будет  ' + storedData.task1);
};
var namerand = Math.floor(Math.random() * players.length);
