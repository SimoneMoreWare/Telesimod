	
	var velocita = 1000; // 1000 = 1 secondo
	
	var blink = setInterval(function () {
		var ele = document.getElementById('blink');
		ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
										}, velocita);