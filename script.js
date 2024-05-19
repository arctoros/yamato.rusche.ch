function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

window.addEventListener('scroll', function() {
    var scrollArrow = document.getElementById('scrollArrow');
    var threshold = vh(117) - 128;
  
    if (window.scrollY >= threshold) {
        scrollArrow.classList.add('scrolling');
    } else {
        scrollArrow.classList.remove('scrolling');
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
    this.classList.toggle("active");

    if (open) {
        container.style.right = "calc(-1 * var(--navwidth))";
        background.style.right = "calc(-1 * var(--navwidth) + (100vw - var(--title_picture_width) - 60vw) / 2)";
        open = false;
    } else {
        container.style.right = "-10vw";
        background.style.right = "0vw";
        open = true;
    }
});