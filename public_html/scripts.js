$("document").ready(function() {

    //background color for the words
    $('.lana').css("background-color", "cyan");

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    // clicking a button to hide the page
    $('#hide').bind('click', hideThePage);

    //clicking a button to show the page
    $('#show').bind('click', showThePage);

    $('#show').css('visibility', 'hidden');

    // the accordion
    $('#accordion').accordion({header: "h4"});


    //clicking a word and replacing it with another
    $('#replaceWText').bind('click', replaceWText);

    //clicking a word and another one pops up
    $('#addAPara').bind('click', addAPara);

    //clicking a button and removing a word
    $('#randPara').bind('click', addAPara);

    //removing words 
    $('#removeAPara').bind('click', removeAPara);
});

//hiding the page
function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

//showing the page
function showThePage() {
    $('#show').css('visibility', 'visible')
    $('div').hide('fold', {}, 2500);
    $('#show').show('puff', {}, 2500);
}


function mouseOverMe() {
    $("h1").html("HI");
}


function mouseOutMe() {
    $("h1").text("LEJLA KASAPOVIC");
}

//adding and replacing words
function changeToText() {
    $(".h1").text("<h6>BYE</h6>");
}

//replacing words
function replaceWText() {
    $('#randPara').html('<h6>BOSNIA</h6>');
}

//adding words
function addAPara() {
    $('#randPara').append('<p>SOPHIA BUSH</p>')
}


//removing words
function removeAPara() {
    $('#randPara p:last').remove();
}