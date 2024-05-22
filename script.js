var album_links = document.getElementsByClassName("nav link photography");
var cursor = document.getElementById("cursor");
var navArrow = document.getElementsByClassName("nav arrow")[0];
var container = document.getElementsByClassName("nav container")[0];
var background = document.getElementsByClassName("nav background")[0];
var open = false;

function calculate(q, r, classes, property, name) {
    var elements = document.getElementsByClassName(classes);
    var s = 14.7;
    var t = 25.04;
    var sign = null;
    var v = (q - r) / (s - t);
    var p = (s * r - t * q) / (s - t);

    v = v.toFixed(3);
    p = p.toFixed(3);

    if (p < 0) {
        p = -p;
        sign = "- ";
    } 
    
    else {
        sign = "+ ";
    }

    if (!name) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style[property] = "calc(" + v + "vw " + sign + p + "px)";
        }
    } 
    
    else if (classes == "root") {
        

        document.querySelector(":root").style.setProperty(name, "calc(" + v + "vw " + sign + p + "px)");
    }
}

calculate(100, 140, "root", "setProperty", "--headersize");
calculate(39, 60, "root", "setProperty", "--subheadersize");
calculate(27, 37, "root", "setProperty", "--navheadersize");
calculate(74, 105, "root", "setProperty", "--albumheadersize");
calculate(19, 27, "root", "setProperty", "--textsize");

calculate(11010, 18320, "desktop", "height");
calculate(225, 360, "title header", "top");
calculate(336, 534, "title subheader", "top");
calculate(89, 103, "title picture", "top");
calculate(235, 374, "logo", "top");
calculate(156, 280, "logo", "left");
calculate(-1330, -940, "scroll container", "top");
calculate(3000, 3500, "scroll container", "height");
calculate(-1330, -940, "scroll arrow", "top");
calculate(579, 921, "scroll text", "top");
calculate(40, 60, "scroll text", "line-height");
calculate(120, 153, "nav container", "top");
calculate(603, 1027, "nav container", "height");
calculate(-3, 6, "nav links about contact photography", "top");
calculate(226, 382, "nav subcontainer photography", "top");
calculate(1700, 2600, "album container", "top");
calculate(59, 44, "floater", "top");

document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    cursor.style.left = x - 10 + "px";
    cursor.style.top = y - 10 + "px";
});

navArrow.addEventListener("click", function() {
    if (open) {
        this.style.transform = "translateX(0) rotate(0deg)";
        container.style.width = "0vw";
        background.style.width = "0vw";
        open = false;
    } else {
        this.style.transform = "translateX(-21vw) rotate(180deg)";
        container.style.width = "25vw";
        background.style.width = "35vw";
        open = true;
    }
});

for (var i = 0; i < album_links.length; i++) {
    album_links[i].addEventListener("click", function() {
    document.getElementsByClassName("album subcontainer " + this.classList[3])[0].scrollIntoView();    
    });
};
