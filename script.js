function calculate1()
	{
		var ans;
		var ctcvco2 = Number(document.getElementById("ctcvco2").value);
		var ctaco2 = Number(document.getElementById("ctaco2").value);
		var ctao2 = Number(document.getElementById("ctao2").value);
		var ctcvo2 = Number(document.getElementById("ctcvo2").value);

		if((ctcvco2 != ctcvco2)||(ctaco2 != ctaco2)||(ctao2 != ctao2)||(ctcvo2 != ctcvo2))
		document.getElementById("answer").innerHTML = 'Неверный ввод';
		else {
			ans = (ctcvco2-ctaco2)/(ctao2-ctcvo2);
			document.getElementById("answer").innerHTML = 'Результат: ' + ans;
		}
	}

function calculate2()
{
	var ans;

	var h = Number(document.getElementById("h").value);
	var pvco2 = Number(document.getElementById("pvco2").value);
	var paco2 = Number(document.getElementById("paco2").value);
	var sao2 = Number(document.getElementById("sao2").value);
	var scvo2 = Number(document.getElementById("scvo2").value);

	if((h != h)||(pvco2 != pvco2)||(paco2 != paco2)||(sao2 != sao2)||(scvo2 != scvo2))
	document.getElementById("answer").innerHTML = 'Неверный ввод';
	else
	{
		var cao2 = h*1.34*sao2/100;
		var ccvo2 = h*1.34*scvo2/100;
		var cavo2 = cao2 - ccvo2;
		ans = (pvco2-paco2)/cavo2;
		document.getElementById("answer").innerHTML = 'Результат: ' + ans;
	}
}