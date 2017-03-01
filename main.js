var svg = document.getElementById("vimage");
var x = -1;
var y = -1;
var NotFirst = false;
var makeCircle = function(e) {
	var mouseX = e.offsetX;
	var mouseY = e.offsetY;
	var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    var l = document.createElementNS("http://www.w3.org/2000/svg","line");
    circle.setAttribute("cx", mouseX);
    circle.setAttribute("cy", mouseY);
    circle.setAttribute("r", "20");
    circle.setAttribute("fill","red");
    svg.appendChild(circle);
    if (NotFirst) {
    	l.setAttribute("x1",x);
    	l.setAttribute("y1",y);
    	l.setAttribute("x2",mouseX);
    	l.setAttribute("y2",mouseY);
    	l.setAttribute("stroke","black");
    	svg.appendChild(l);
    }
    x = mouseX;
    y = mouseY;
    NotFirst = true;

};
var clearSVG = function() {
    while(svg.hasChildNodes()) {
    	svg.removeChild(svg.lastChild);
    }
	NotFirst = false;
 };

svg.addEventListener("click", makeCircle);
var b = document.getElementById("clear");
b.addEventListener("click",clearSVG);