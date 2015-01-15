$("document").ready(function() {
    $('.lana').css("background-color", "cyan");
});



//$('#superHumans').css('background-color', 'cyan');

$("document").ready(function() {
$('#superHumans').accordion({header: "h4"});
   
 //     $('#replaceWHtml').bind('click', replaceWText);
    
 //     $('#randPara').bind('click', addAPara);
    
 //     $('#removePara').bind('click', removeAPara);
    
 //     $('#hide').bind('click',hideThePage);
    
//    $('#show').bind('click',showThePage);
    
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


function removeAPara(){
    $('#randPara').remove();
}

function addAPara (){
    $('#randPara').append('<p>Hi</p>');
}

function replaceWText (){
    $('#lana').text('<h6>UGH</h6>');
}
 