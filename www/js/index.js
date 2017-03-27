$(document).on('deviceready', function() {

     // determinem amplada alçada DISPOSITIU ------------------
     var amplada_pantalla = screen.width ;		// 720px  --> SG_Note2
     var alcada_pantalla = screen.height ; 		// 1280px
     var amplada_pantalla_CSS = window.innerWidth ; 	// 360px
     var alcada_pantalla_CSS = window.innerHeight ;	// 616px 
     /////////////////////////////////////////////////////////
     
     
	document.addEventListener("offline", function() { 
		alert("ara NO HI HA internet");
	}, false);
 
	$(window).resize(function() {
		alert("has girat el dispositiu");
	}, false); 
	
	document.addEventListener('touchstart', function(e) {
		// alert("Clicat") ;
	});	
	
	document.addEventListener('touchmove', function(e) {
		// alert("has arrastrat el dit");
	 });
	  
	  
	$('#connectButton').click(function() {
		app.connect()
	})

	$('#disconnectButton').click(function() {
		app.disconnect()
	})

	$('#led').click(function(){
		app.ledOn()
	})
