function coef(ctcvco2, ctaco2, ctao2, ctcvo2)
{
	return (ctcvco2-ctaco2)/(ctao2-ctcvo2);
}

function calculate_coef()
{
	var ctcvco2 = Number(document.getElementById("ctcvco2").value);
	var ctaco2 = Number(document.getElementById("ctaco2").value);
	var ctao2 = Number(document.getElementById("ctao2").value);
	var ctcvo2 = Number(document.getElementById("ctcvo2").value);

	document.getElementById("answer").innerHTML = coef(ctcvco2, ctaco2, ctao2, ctcvo2);
	}

function sur_coef(h, pvco2, paco2, sao2, scvo2)
{
	var cao2 = h*1.34*sao2/100;
	var ccvo2 = h*1.34*scvo2/100;
	var cavo2 = cao2 - ccvo2

	return (pvco2-paco2)/cavo2;
	}

function calculate_sur_coef()
{
	var h = Number(document.getElementById("h").value);
	var pvco2 = Number(document.getElementById("pvco2").value);
	var paco2 = Number(document.getElementById("paco2").value);
	var sao2 = Number(document.getElementById("sao2").value);
	var scvo2 = Number(document.getElementById("scvo2").value);

	document.getElementById("answer").innerHTML = sur_coef(h, pvco2, paco2, sao2, scvo2);
}
