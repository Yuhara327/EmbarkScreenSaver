function clock()
{
	var now = new Date();
	var h = now.getHours();
	var mi = now.getMinutes();
	var coron = ':';

	if (h < 10) h = "0" + h;
	if (mi < 10) mi = "0" + mi;

	document.getElementById("clock_time").innerHTML = h + coron + mi;
	document.getElementById("clock_frame").style.fontSize = window.innerWidth / 10 + "px";
}

setInterval(clock, 1000);