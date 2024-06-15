var album_links = document.getElementsByClassName("nav link photography");
var cursor = document.getElementById("cursor");
var navArrow = document.getElementsByClassName("nav arrow")[0];
var container = document.getElementsByClassName("nav container")[0];
var background = document.getElementsByClassName("nav background")[0];
var open = false;

var calcArrayDesktop = [
    [90, 140, "root", "--headersize"],
    [39, 60, "root", "--subheadersize"],
    [27, 37, "root", "--navheadersize"],
    [74, 105, "root", "--albumheadersize"],
    [19, 27, "root", "--textsize"],
    [11010, 18320, "desktop", "height"],
    [225, 360, "title header", "top"],
    [336, 534, "title subheader", "top"],
    [89, 103, "title picture", "top"],
    [235, 374, "title logo", "top"],
    [156, 280, "title logo", "left"],
    [-1330, -940, "scroll container", "top"],
    [3000, 3500, "scroll container", "height"],
    [-1330, -940, "scroll arrow", "top"],
    [579, 921, "scroll text_desktop", "top"],
    [40, 60, "scroll text_desktop", "line-height"],
    [120, 153, "nav container", "top"], 
    [603, 1027, "nav container", "height"],
    [-3, 6, "nav links about contact photography", "top"],
    [226, 382, "nav subcontainer photography", "top"],
    [1700, 2600, "album container", "top"],
    [59, 44, "floater", "top"],
    [64, 80, "other header", "top"],
    [74, 96, "other logo", "top"],
    [156, 280, "other logo", "left"],
    [72, 110, "other arrow", "top"],
    [106, 240, "other arrow", "right"],
    [200, 290, "other content container", "top"],
    [156, 280, "other content container", "left"],
    [48, 130, "other content container", "gap"],
    [570, 800, "other content subcontainer", "width"],
    [570, 970, "other content picture", "width"],
    [570, 970, "other content picture", "height"],
    [0, -20, "other file container", "top"],
    [135, 240, "other file container", "left"],
    [-15, 0, "other file svg", "top"],
    [54, 30, "other file svg", "left"],
    [30, 0, "other tetra file svg", "left"],
    [36, 84, "other file text", "top"],
    [24, -4, "other file text", "left"]
];

function calcDesktop(array) {
    var classes = array[2];
    var elements = document.getElementsByClassName(classes);
    var property = array[3];
    var q = array[0];
    var r = array[1];
    var s = 14.7;
    var t = 25.04;
    var v = (q - r) / (s - t);
    var p = (s * r - t * q) / (s - t);
    var sign = null;

    v = v.toFixed(3);
    p = p.toFixed(3);

    if (p < 0) {
        p = -p;
        sign = "- ";
    } else {
        sign = "+ ";
    }

    if (classes == "root") {
        document.querySelector(":root").style.setProperty(property, "calc(" + v + "vw " + sign + p + "px)");
    }

    else {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style[property] = "calc(" + v + "vw " + sign + p + "px)";
        }
    }
}

function removeProperty(classes, property) {
    if (classes == "root") {
        document.querySelector(":root").style.removeProperty(property);
    } else {
        var elements = document.getElementsByClassName(classes);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.removeProperty(property);
        }
    }
}

function calcResize() {
    if (window.innerWidth / window.innerHeight > 1) {
        for (var i = 0; i < calcArrayDesktop.length; i++) {
            calcDesktop(calcArrayDesktop[i]);
        }
    }
    if (window.innerWidth / window.innerHeight < 1) {
        for (var i = 0; i < calcArrayDesktop.length; i++) {
            removeProperty(calcArrayDesktop[i][2], calcArrayDesktop[i][3]);
        }
    }
}

/*
function calcDesktop(array) {
    var classes = array[2];
    var elements = document.getElementsByClassName(classes);
    var property = array[3];
    var name = array[4];
    var q = array[0];
    var r = array[1];
    var s = 14.7;
    var t = 25.04;
    var v = (q - r) / (s - t);
    var p = (s * r - t * q) / (s - t);
    var sign = null;

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

function removeProperty(classes, property) {
    if (classes == "root") {
        document.querySelector(":root").style.removeProperty(property);
    } else {
        var elements = document.getElementsByClassName(classes);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.removeProperty(property);
        }
    }
}
*/

calcResize();
window.addEventListener("resize", calcResize);

document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    cursor.style.left = x - 10 + "px";
    cursor.style.top = y - 10 + "px";
});

navArrow.addEventListener("click", function() {
    if (open) {
        if (window.innerWidth / window.innerHeight > 1) {
            this.style.transform = "translateX(0) rotate(0deg)";
            container.style.width = "0vw";
            background.style.width = "0vw";
            open = false;
        } else if (window.innerWidth / window.innerHeight < 1) {
            this.style.transform = "translateY(0vw) rotate(0deg)";
            container.style.height = "0vw";
            background.style.height = "0vw";
            open = false;
        }
    } else {
        if (window.innerWidth / window.innerHeight > 1) {
            this.style.transform = "translateX(-21vw) rotate(180deg)";
            container.style.width = "25vw";
            background.style.width = "35vw";
            open = true;
        } else if (window.innerWidth / window.innerHeight < 1) {
            this.style.transform = "translateY(0vw) rotate(180deg)";
            container.style.height = "116.2vh";
            background.style.height = "140vh";
            open = true;
        }
    }
});

for (var i = 0; i < album_links.length; i++) {
    album_links[i].addEventListener("click", function() {
    document.getElementsByClassName("album subcontainer " + this.classList[3])[0].scrollIntoView();    
    });
};
