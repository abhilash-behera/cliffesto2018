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
    $('#perspective').fadeIn(2000);
    
    console.log("hey");
  
	setTimeout(function(argument){
    $('.cliffesto_header').remove();
	new_fullpage();
	},1000);
	

	
	
},2000);
}

function new_fullpage()
{
	var main = false;
    var slideIndex = 1;
    sliding = false;
    var delay = 2000;
    var timeoutId;
    var done = false;
    var animationIsFinished= false;
    var next_index;
    var next_index1;
    $(document).ready(function(){
        
      $("#fullpage").fullpage(
        {
        css3:true,
        controlArrows:false,
        parallax:true,
        fitToSection:true,
        setScrollingSpeed:5000,
        keyboardScrolling:false,
        verticalCentered:false,
        navigation:true,
        sectionsColor:['#E1F5FE','#E1F5FE','#E1F5FE','#E1F5FE'],
        navigationTooltips:['Home','About','Gallery','Contact us'],
        easingcss3:'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
        parallaxOptions:{type:'reveal', percentage:100,property:'cover'},
 

        onLeave: function(index, nextIndex, direction) {
              console.log('index is ',index);
              console.log('next index is ',nextIndex);
              var div1  = document.getElementById(index);
              var div2 = document.getElementById(nextIndex);
              classie.remove(div1,'wrapper');
              classie.add(div2,'wrapper');
              
              if(index==1 && !done)
              {
				next_index=nextIndex;              
                //animating my element
				main = true;// so that i know it is not first time
				parallaxInstance.disable();
				$.fn.fullpage.setScrollingSpeed(5000);
				$.fn.fullpage.setAllowScrolling(false);
				$(body).css('overflow','hidden');
				$('#trees1').css('animation-delay','1.2s');
				$('#trees2').css('animation-delay','1.0s');	
				$('#first_layer').css('animation-delay','0.8s');	
				$('#second_layer').css('animation-delay','0.6s');
				$('#third_layer').css('animation-delay','0.4s');
				$('#fourth_layer').css('animation-delay','0.2s');
				$('#cliffesto_logo').css('animation-delay','1.5s');
				$('#fourth_layer').addClass('animated bounceOutDown');
				$('#third_layer').addClass('animated bounceOutDown');
				$('#second_layer').addClass('animated bounceOutDown');
				$('#first_layer').addClass('animated bounceOutDown');
				$('#trees2').addClass('animated bounceOutDown');
				$('#trees1').addClass('animated bounceOutDown');
				$('#cliffesto_logo').addClass('animated zoomOut');
				$('#overlayed_screen').removeClass('animated slideOutLeft');
				$('#overlayed_screen').addClass('animated slideInLeft')

done = true;
setTimeout(function()
{
  $.fn.fullpage.setScrollingSpeed(1000);
  $.fn.fullpage.moveTo(next_index);
  $.fn.fullpage.setAllowScrolling(true);
console.log('hey i just did is');
},1600);
console.log('hey this is return part of the program');
return false;
}
if(index==2)
{
	
	$('#overlayed_screen').removeClass('animated slideOutLeft');
	$('#overlayed_screen').css('animation-delay','0.001s');
				$('#overlayed_screen').addClass('animated slideInLeft');
				$.fn.fullpage.setScrollingSpeed(3000);
}
if(index==3)
{
$('#overlayed_screen').removeClass('animated slideOutLeft');
	$('#overlayed_screen').css('animation-delay','0.001s');
				$('#overlayed_screen').addClass('animated slideInLeft');
				$.fn.fullpage.setScrollingSpeed(3000);
}
if(index==4)
{
	$('#overlayed_screen').removeClass('animated slideOutLeft');
	$('#overlayed_screen').css('animation-delay','0.001s');
				$('#overlayed_screen').addClass('animated slideInLeft');
				$.fn.fullpage.setScrollingSpeed(3000);
}



              
    },
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) 
    {
        sliding = false;
    },
    afterLoad: function(anchorLink , index)
    {

    	if(index!=1)
    	{
    		done=false;
    	}
    if(index == 1 && main)
    {
      	$('#overlayed_screen').removeClass('animated slideInLeft');
	$('#overlayed_screen').css('animation-delay','0.1s');
	$('#overlayed_screen').addClass('animated slideOutLeft');
      $('#main_background_i').addClass('animated bounceOutDown');
      $('#trees1').css('animation-delay','0s');
$('#trees1').removeClass('bounceOutDown');
$('#trees1').addClass('bounceInUp');

$('#trees2').css('animation-delay','0.2s');
$('#trees2').removeClass(' bounceOutDown');
$('#trees2').addClass('bounceInUp');
$('#first_layer').css('animation-delay','0.4s');
$('#first_layer').removeClass(' bounceOutDown');
$('#first_layer').addClass('bounceInUp');
$('#second_layer').css('animation-delay','0.6s');
$('#second_layer').removeClass('bounceOutDown');
$('#second_layer').addClass(' bounceInUp');
$('#third_layer').css('animation-delay','0.8s');
$('#third_layer').removeClass(' bounceOutDown');
$('#third_layer').addClass(' bounceInUp');
$('#fourth_layer').css('animation-delay','1.0s');
$('#fourth_layer').removeClass(' bounceOutDown');
$('#fourth_layer').addClass(' bounceInUp');

$.fn.fullpage.setScrollingSpeed(3000);

$('#cliffesto_logo').removeClass('zoomOut');

$('#cliffesto_logo').addClass('zoomIn');



setTimeout(function()
{

$('#trees1').removeClass('animated bounceInUp');
$('#trees2').removeClass('animated bounceInUp');
$('#first_layer').removeClass('animated bounceInUp');
$('#second_layer').removeClass('animated bounceInUp');
$('#third_layer').removeClass('animated bounceInUp');
$('#fourth_layer').removeClass('animated bounceInUp');
$('#cliffesto_logo').removeClass('animated bounceInUp');

},1700);

parallaxInstance.enable();
}

if(index==2)
{
	$('#overlayed_screen').removeClass('animated slideInLeft');
	$('#overlayed_screen').css('animation-delay','0.01s');
	$('#overlayed_screen').addClass('animated slideOutLeft');
	$.fn.fullpage.setScrollingSpeed(3000);
}
if(index==3)
{
	$('#overlayed_screen').removeClass('animated slideInLeft');
	$('#overlayed_screen').css('animation-delay','0.01s');
	$('#overlayed_screen').addClass('animated slideOutLeft');
	$.fn.fullpage.setScrollingSpeed(3000);
}
if(index==4)
{
	$('#overlayed_screen').removeClass('animated slideInLeft');
	$('#overlayed_screen').css('animation-delay','0.01s');
	$('#overlayed_screen').addClass('animated slideOutLeft');
	$.fn.fullpage.setScrollingSpeed(3000);
}

    }
        });
    });
}




