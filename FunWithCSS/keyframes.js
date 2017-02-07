
var panel = '';
var date = new Date().toLocaleTimeString();

$(document).ready(function(){
	casey = (()=>{
			for(var i = 0; i < 121; i ++){
				panel += '<div class="panel1 col-sm-1">' + date + '<h1>' + i + '</h1>' + '</div>';	
			}
		$('.main').html(panel);
	
	});
	setInterval(casey(), 10);

});