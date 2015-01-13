$("document").ready(function() {
    $('.lana').css("background-color", "cyan");
    $('.div p:nth-child(first)').css('background-color', 'red');
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
});


function mouseOverMe() {
    $("h1").html("MouseOn");
}

function mouseOutMe() {
    $("h1").html("MouseOff");
}

$("document").ready(function() {

    $('#replaceWHtml').bind('click', replaceWHtml);
    $('#replaceWText').bind('click', replaceWText);

});

function replaceWHtml() {
    $('#h3Tag').html('<h6>Now I\'m an h6</h6>');
}

function replaceWText() {
    $('#h3Tag').text('<h6>Now I\'m an h6</h6>');
}

