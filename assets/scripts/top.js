// Button.
const topBtn = document.querySelector('.back-to-top-btn')

// Appears on scroll down.
function visibleOnScroll() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        topBtn.classList.add('visible-btn')
    } else {
        topBtn.classList.remove('visible-btn')
    }
}

// Scroll to top.
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Onclick and onscroll events.
topBtn.onclick = scrollToTop
window.onscroll = visibleOnScroll