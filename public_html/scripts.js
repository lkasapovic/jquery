$("document").ready(function() {
    $('.lana').css("background-color", "cyan");

    $("h1").bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
    
     $('#show').css('visibility','hidden');
     
     $('#accordion').accordion({header: "h4"});
     
     
     $('#replaceWText').bind('click', replaceWText);
     
     $('#addAPara').bind('click', addAPara);
     
     $('#randPara').bind('click', addAPara);
     
     $('#removeAPara').bind('click', removeAPara);
});

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').hide('fold', {}, 2500);
    $('#show').show('puff', {}, 2500);
}

function mouseOverMe(){
    $("h1").html("HI");
}

function mouseOutMe(){
    $("h1").text("LEJLA KASAPOVIC");
}
 
 function changeToText(){
     $(".h1").text("<h6>BYE</h6>");
 }
 
 function replaceWText(){
     $('#randPara').html('<h6>BOSNIA</h6>');
 }
 
 function addAPara(){
     $('#randPara').append('<p>SOPHIA BUSH</p>')
 }
 
 function removeAPara(){
     $('#randPara p:last').remove();
 }