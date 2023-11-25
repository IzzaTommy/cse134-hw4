window.addEventListener('DOMContentLoaded', init);

function init() {
    themeHandler();
    validationHandler();
}

function themeHandler() {
    let theme = localStorage.getItem('theme');
    let checkbox = document.querySelector('nav > ul input');

    checkbox.addEventListener('change', swapTheme);

    function swapTheme(e) {
        if (e.currentTarget.checked === true) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    if (theme === null) {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            checkbox.checked = true;
        }
    }
}



function validationHandler() {
    
}