// Variables for each item.
const page = document.querySelector('.page-wrapper')
const btn = document.querySelector('.dark-mode-btn')
const darkIcon = document.querySelector('.dark-icon')
const lightIcon = document.querySelector('.light-icon')

// Switches between dark and light mode.
// Also changes the appearence of the button's icon.
function darkMode() {
    if (btn.classList.contains('dark')) {
        // Removes the 'dark' classes.
        btn.classList.remove('dark')
        page.classList.remove('dark')
        // Adds the 'light' classes.
        btn.classList.add('light')
        page.classList.add('light')
        // Removes the 'active' class.
        darkIcon.classList.remove('active')
        // Adds the 'active' class.
        lightIcon.classList.add('active')
    } else {
        // Removes the 'light' classes.
        btn.classList.remove('light')
        page.classList.remove('light')
        // Adds the 'dark' classes.
        btn.classList.add('dark')
        page.classList.add('dark')
        // Removes the 'active' class.
        lightIcon.classList.remove('active')
        // Adds the 'active' class.
        darkIcon.classList.add('active')
    }
}

// Onclick button events.
btn.onclick = darkMode