const switchButtons = document.querySelectorAll('.switchButton');
switchButtons.forEach(button => {
    button.addEventListener('click', buttonColorFill);
});

function buttonColorFill() {
    this.style.backgroundColor = 'white';
    this.style.borderColor = 'white';
    this.style.opacity = '.8';

    for (let i = 0; i < switchButtons.length; i++) {
        if (switchButtons[i] !== this) {
            switchButtons[i].style.backgroundColor = 'transparent';
            switchButtons[i].style.borderColor = 'white';
            switchButtons[i].style.opacity= '.3';
        }
    }
}

