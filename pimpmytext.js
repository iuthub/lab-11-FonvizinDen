alert("Hello world!");

function BiggerText(){
	document.getElementById('area').style.fontSize = '24pt';
}

function CheckBox(){
	if(document.getElementById('bling').checked){
		document.getElementById('area').style.fontWeight = 'bold';
		document.getElementById('area').style.textDecoration = 'underline';
		document.getElementById('area').style.fontColor = 'green';
		document.getElementById('area').style.text-decoration = 'blink';
		document.getElementById('area').style.fontStyle = 'italic';
		document.getElementById('area').style.fontSize = '15pt';
	}
}