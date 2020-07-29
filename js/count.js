 $(function() {
 	//const currentYear = new Date().getFullYear();
 	const Startday = new Date(`July 02 2019 00:00:00`);


 	//$('#year').text(currentYear+1); //set Background year

 	//Update coutdown time
 	function updateCountdown(){
 		const currentTime = new Date();
 		const diff = currentTime - Startday;
 		const d=Math.floor(diff/1000/60/60/24);
 		const h=Math.floor(diff/1000/60/60)%24;
 		const m=Math.floor(diff/1000/60)%60;
 		const s=Math.floor(diff/1000)%60;
 		$('#days').text(d);
	 	$('#hours').text(h<10?'0'+h:h);
	 	$('#minutes').text(m<10?'0'+m:m);
	 	$('#seconds').text(s<10?'0'+s:s);
 	}
 	
 	setTimeout(()=>{
 	$('#loading').remove();
 	$('#countdown').css('display','flex');

 	},1000);
 setInterval(updateCountdown,1000);
 	
 });