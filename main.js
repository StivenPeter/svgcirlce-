var svg = document.getElementByD("vimage");
var x = -1
var y = -1
var makeCircle = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    var c = document.createElementNS("https://wwww.w3.org/2000/svg","line");
    c.setAttribute("cx", mouseX);
    c.setAttribute("cy", mouseY);
    c.setAttribute("r", "20") 
    c.setAttribute("fill","yellow");
    svg.appendChild(c);
};
var clearSVG = function() {
    svg.empty();
 };

c.addEventListener("click", makeCircle);
document.getElementById("clear").addEventListener("click", clearSVG);
