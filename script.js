function calculate(q, r, type, classes, number, property) {
    var s = 14.7;
    var t = 25.04;
    var sign = null;
    var v = (q - r) / (s - t);
    var p = (s * r - t * q) / (s - t);

    v = v.toFixed(3);
    p = p.toFixed(3);

    if (type == "css") {
        var elements = document.getElementsByClassName(classes);

        if (p < 0) {
            p = -p;
            sign = "- ";
        } else {
            sign = "+ ";
        }

        if (number == null) {
            number = elements.length;
        }

        for (var i = 0; i < number; i++) {
            elements[i].style[property] = "calc(" + v + "vw " + sign + p + "px)";
        }
    } 
    
    else if (type == "n") {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var result = v * w / 100 + parseInt(p);
        return result;
    }
}

window.addEventListener('scroll', function() {
    var scrollArrowFixed = document.getElementsByClassName('scroll arrow fixed')[0];
    var scrollArrowScrolling = document.getElementsByClassName('scroll arrow scrolling')[0];
    var threshold = calculate(848, 1434, "n");
  
    if (window.scrollY >= threshold) {
        scrollArrowFixed.style.display = "block";
        scrollArrowScrolling.style.display = "none";
    } else {
        scrollArrowFixed.style.display = "none";
        scrollArrowScrolling.style.display = "block";
    }
  });

var album_links = document.getElementsByClassName("nav link photography");

for (var i = 0; i < album_links.length; i++) {
    album_links[i].addEventListener("click", function() {
        document.getElementsByClassName("album subcontainer " + this.classList[3])[0].scrollIntoView();
    });
};

var cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    cursor.style.left = x - 10 + "px";
    cursor.style.top = y - 10 + "px";
});

var navArrow = document.getElementsByClassName("nav arrow")[0];
var container = document.getElementsByClassName("nav container")[0];
var background = document.getElementsByClassName("nav background")[0];
var open = false;

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

// RESPOSIVENESS

calculate(-1330, -940, "css", "scroll arrow scrolling", null, "top");
calculate(-484, 492, "css", "scroll arrow fixed", null, "top");
calculate(579, 921, "css", "scroll text", null, "top");
calculate(235, 374, "css", "logo", null, "top");
calculate(235, 374, "css", "title header", null, "top");
calculate(336, 534, "css", "title subheader", null, "top");
calculate(89, 103, "css", "title picture", null, "top");
calculate(120, 153, "css", "nav container", null, "top");
calculate(603, 1027, "css", "nav container", null, "height");
