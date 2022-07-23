function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
  }
  
		function OrologioScorrevole() {
			var data = new Date();
			var day =  addZero(data.getDate()) ;
			var giorno = data.getDay();
			var month =  data.getMonth() ;
			var yy =  addZero(data.getFullYear());
			var hh = addZero(data.getHours());
			var mm =  addZero(data.getMinutes());
			var ss =  addZero(data.getSeconds());
	
			switch (giorno){
				case 1:
				giorno="Lu";
				break;
				
				case 2:
				giorno="Ma";
				break;
				
				case 3:
				giorno="Me";
				break;
				
				case 4:
				giorno="Gi";
				break;
				
				case 5:
				giorno="Ve";
				break;
				
				case 6:
				giorno="Sa";
				break;
				
				case 7:
				giorno="Do";
				break;
						}
	
			switch (month){
					
				case 0:
				month="Gen";
				break;
					
				case 1:
				month="Feb";
				break;
					
				case 2:
				month="Mar";
				break;
					
				case 3:
				month="Apr";
				break;
					
				case 4:
				month="Mag";
				break;
					
				case 5:
				month="Giu";
				break;
					
				case 6:
				month="Lug";
				break;
					
				case 7:
				month="Ago";
				break;
					
				case 8:
				month="Set";
				break;
					
				case 9:
				month="Ott";
				break;
					
				case 10:
				month="Nov";
				break;
					
				case 11:
				month="Dic";
				break;	
					}
	
			var ora =  giorno + " " + day + " " + month + " " + hh + ":" + mm + ":" + ss;
	
			document.getElementById("orologio").innerText = ora;
			window.setTimeout("OrologioScorrevole()", 1000);
											}
  
