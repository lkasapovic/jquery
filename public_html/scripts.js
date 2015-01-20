$("document").ready(function() {
    $('.lana').css("background-color", "cyan");

    $("h1").bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
    
     $('#show').css('visibility','hidden');
     
     
    
    $('#accordian').accordion({header: "h4"});
});

function hideThePage(){
    $('#show').css('visibility', 'hidden');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').hide('fold', {}, 2500);
    $('#show').show('puff', {}, 2500);
}
 