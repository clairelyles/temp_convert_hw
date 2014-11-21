

document.addEventListener('DOMContentLoaded',function(){
	var convertButton = document.getElementById('submit');
	var clearButton = document.getElementById('clear');
	var convertTemp = function(F) {
		var C = Math.round((F - 32) / 1.8);
		return C;
		console.log(C);
	}

	convertButton.addEventListener('click',function(){
		var inputTemp = document.getElementById('tmpOrig').value;
		console.log(inputTemp);
		var C = convertTemp(inputTemp);
		console.log(C);
		this.style.backgroundColor="grey";
		document.getElementById('tmpFinal').value = C;
	});

	clearButton.addEventListener('click',function(){
		console.log('alert')
		var clearTemp = "";
		document.getElementById('tmpOrig').value = clearTemp;
		document.getElementById('tmpFinal').value = clearTemp;
		document.getElementById('submit').style.backgroundColor="white";
		document.getElementById('clear').style.backgroundColor="grey";
	});
});

