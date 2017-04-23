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

var storedData;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

var num = Math.random() * (360 - 10) + 10;

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    $$('.btn3d').on('click', function (e) { 
        var cssAnimation = document.createElement('style');
        cssAnimation.type = 'text/css';
        var rules = document.createTextNode('@-webkit-keyframes eye {'+
            'to { transform:rotate('+ num +'deg); }');
        cssAnimation.appendChild(rules);
        document.getElementsByTagName("head")[0].appendChild(cssAnimation); 
        $$('.creature').css({
           animation: 'eye 4s ease forwards' ,
        });
    });
    $$('.button-round').on('click', function (e) { 
        storedData = myApp.formGetData('my-form');
    })
    $$('.creature').animationEnd(function(){
        
        if (namerand == 0) {
            if(num>0 && num <= 120){
                $$('.result1').html(players[namerand] + ' будет '+ storedData.task1);
                $$('.result2').html((players[namerand+ 1]) + ' будет '+ storedData.task2);
                $$('.result3').html((players[namerand+ 2]) + ' будет '+ storedData.task3);
            }
            else if (num>120 && num <= 240) {
                $$('.result1').html(players[namerand] + ' будет '+ storedData.task2);
                $$('.result2').html((players[namerand+ 1]) + ' будет '+ storedData.task1);
                $$('.result3').html((players[namerand+ 2]) + ' будет '+ storedData.task3);
            }
            else if (num>240 && num <= 360) {
                $$('.result1').html(players[namerand] + ' будет '+ storedData.task3);
                $$('.result2').html((players[namerand+ 1]) + ' будет '+ storedData.task1);
                $$('.result3').html((players[namerand+ 2]) + ' будет '+ storedData.task2);
            }
        }
        if (namerand == 1) {
            if(num>0 && num <= 120){
                $$('.result1').html(players[namerand] + ' будет '+ storedData.task1);
                $$('.result2').html((players[namerand+ 1]) + ' будет '+ storedData.task2);
                $$('.result3').html((players[namerand- 1]) + ' будет '+ storedData.task3);
            }
            else if (num>120 && num <= 240) {
                $$('.result1').html(players[namerand] + ' будет '+ storedData.task2);
                $$('.result2').html((players[namerand+ 1]) + ' будет '+ storedData.task1);
                $$('.result3').html((players[namerand- 1]) + ' будет '+ storedData.task3);
            }
            else if (num>240 && num <= 360) {
                $$('.result1').html(players[namerand] + ' будет '+ storedData.task3);
                $$('.result2').html((players[namerand+ 1]) + ' будет '+ storedData.task1);
                $$('.result3').html((players[namerand- 1]) + ' будет '+ storedData.task2);
            }
        }    
        if (namerand == 2) {
            if(num>0 && num <= 120){
                $$('.result1').html(players[namerand] + ' будет '+ storedData.task1);
                $$('.result2').html((players[namerand- 1]) + ' будет '+ storedData.task2);
                $$('.result3').html((players[namerand- 2]) + ' будет '+ storedData.task3);
            }
            else if (num>120 && num <= 240) {
                $$('.result1').html(players[namerand] + ' будет '+ storedData.task1);
                $$('.result2').html((players[namerand- 1]) + ' будет '+ storedData.task2);
                $$('.result3').html((players[namerand- 2]) + ' будет '+ storedData.task3);
            }
            else if (num>240 && num <= 360) {
                $$('.result1').html(players[namerand] + ' будет '+ storedData.task3);
                $$('.result2').html((players[namerand- 1]) + ' будет '+ storedData.task1);
                $$('.result3').html((players[namerand- 2]) + ' будет '+ storedData.task2);
            }
        }  
        $$('.result').css({
            overflow: 'hidden', 
            'border-right': '.10em solid orange', 
            'white-space': 'nowrap', 
            margin: '0 auto',
            'letter-spacing': '.10em',
            animation: 
                'typing 3.5s steps(40, end) , blink-caret .75s step-end infinite',
        });       
    })


    if (page.name === 'work') {
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="wheel"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
})