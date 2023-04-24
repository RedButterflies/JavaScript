function oblicz()
{
	var l1=document.getElementById('l1');
	l1=l1.value;
	l1=parseInt(l1);
	var l2=parseInt(document.getElementById('l2').value);
	var s=document.getElementById('suma');
	s.value=l1+l2;
}
function rata()
{
	var K=document.getElementById('K');
	K=K.value;
	K=parseFloat(K);
	var pr=parseFloat(document.getElementById('pr').value)/100;
	var n=parseInt(document.getElementById('n').value);
	var pr_mc=parseFloat(pr/12);
	var r=document.getElementById('rata');
	var t=document.getElementById('kwota');
	var x=parseFloat((K*pr_mc)/(1-(1/(Math.pow((1+pr_mc),n)))));
	var y=parseFloat((K*pr_mc)/(1-(1/(Math.pow((1+pr_mc),n)))))*n;
	if (isNaN(x) || !isFinite(x)) {
		document.getElementById('komunikat').value="Wprowadz poprawną wartosc";
	r.value = "";
	k.value = "";}
	else{
	r.value=x.toFixed(2);
	t.value=y.toFixed(2);
	document.getElementById('komunikat').value="";
	
	}
}
function calculate() {
			var x = parseFloat(document.getElementById("x").value);
			var y = parseFloat(document.getElementById("y").value);
			var operation = document.querySelector('input[name="operation"]:checked').value;
			var result; 
			var wynik=document.getElementById('result');

			switch (operation) {
				case "add":
					result = x + y;
					break;
				case "subtract":
					result = x - y;
					break;
				case "multiply":
					result = x * y;
					break;
					case "divide":
					result = x / y;
					break;
					default:
					alert("Nie wybrano działania!");
					return;
									}
									
	if (isNaN(result) || !isFinite(result)) {
		document.getElementById('komunikat').value="Wprowadz poprawną wartosc";
	wynik.value = "";}
	else{
		wynik.value=result;
	}
	}

