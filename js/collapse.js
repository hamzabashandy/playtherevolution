/* $("#accordion > a").click(function(){

	if(false == $(this).next().is(':visible')) {
		$('#accordion > p').slideUp(300);
	}
	$(this).next().slideToggle(300);
}); 

$('#accordion > p:eq(0)').show(); 
    
 myID = document.getElementById("#accordion > p");

var myScrollFunc = function() {
  var y = window.scrollY;
    
  if (y >= 0 && y < 200) {
    $('#accordion > .p1').slideDown(300);
    $('#accordion > .p2').slideUp(300);
    $('#accordion > .p3').slideUp(300);
    $('#accordion > .p4').slideUp(300);
    $('#accordion > .p5').slideUp(300);
      
  } 
  else if (y >= 200 && y < 500) {
    $('#accordion > .p2').slideDown(300);
    $('#accordion > .p1').slideUp(300);
    $('#accordion > .p3').slideUp(300);
    $('#accordion > .p4').slideUp(300);
    $('#accordion > .p5').slideUp(300);
      
  } 
  else if (y >= 550 && y < 800){
    $('#accordion > .p3').slideDown(300);
    $('#accordion > .p2').slideUp(300);
    $('#accordion > .p1').slideUp(300);
    $('#accordion > .p4').slideUp(300);
    $('#accordion > .p5').slideUp(300);
  }
    
  else if (y >= 800 && y < 1200){
    $('#accordion > .p4').slideDown(300);
    $('#accordion > .p1').slideUp(300);
    $('#accordion > .p2').slideUp(300);
    $('#accordion > .p3').slideUp(300);
    $('#accordion > .p5').slideUp(300);
  }

  else {
    $('#accordion > .p5').slideDown(300);
    $('#accordion > .p1').slideUp(300);
    $('#accordion > .p2').slideUp(300);
    $('#accordion > .p3').slideUp(300);
    $('#accordion > .p4').slideUp(300);
  }
    
}; 

window.addEventListener("scroll", myScrollFunc); */