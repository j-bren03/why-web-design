// Trigger animations when they're in frame.
// Detect request animation frame.
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
    });

    scroll(loop);
}

// Call the loop for the first time.
loop();

// Function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return ((rect.top <= 0 && rect.bottom >= 0) || (rect.bottom 
    >= (window.innerHeight || document.documentElement.clientHeight)
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    || (rect.top >= 0 && rect.bottom <= (window.innerHeight 
    || document.documentElement.clientHeight)));
}