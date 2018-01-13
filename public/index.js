$('.ribbon').addClass('active');
//for removing the loader and showing the content
const DOM={};
window.onload=function()
{
DOM.frame = document.querySelector(".frame");
DOM.clouds=document.querySelector('.clouds');
setTimeout(function(argument) {
	$('.cliffesto_header').fadeOut(1000);
	//$('.clouds').fadeOut(1000)
	$('#canvas-image').fadeOut(1000);
    $('.perspective').fadeIn(2000);
    
    console.log("hey");
  
	setTimeout(function(argument){
    $('.cliffesto_header').remove();
	
	},1000);
	setTimeout(function(){

	},5000);
	
	
},2000);

}

