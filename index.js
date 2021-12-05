function buttonColorFill(liColor) {
    let switchButton = document.getElementsByClassName('switchButton');
    liColor.style.backgroundColor = 'white';
    liColor.style.borderColor = 'white';
    liColor.style.opacity = '.8';

    for (let i = 0; i < switchButton.length; i++) {
        if (switchButton[i] !== liColor) {
            switchButton[i].style.backgroundColor = 'transparent';
            switchButton[i].style.borderColor = 'white';
            switchButton[i].style.opacity= '.3';
        }
    }
}

