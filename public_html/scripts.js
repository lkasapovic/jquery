/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    $('.lana').css("background-color", "cyan");
    $('.div p:nth-child(first)').css('background-color','red');
    $("h1").bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
});


function mouseOverMe(){
    $("h1").html("MouseOn");
}

function mouseOutMe(){
    $("h1").html("MouseOff");
}

