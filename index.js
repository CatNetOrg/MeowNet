const switchButtons = document.querySelectorAll('.switchButton');
switchButtons.forEach(button => {
    button.addEventListener('click', buttonColorFill);
});

const submitPanel = document.getElementById("createSubmitPanel");

const logInPanel = document.getElementById("createLogInPanel")

const buttonSubmit = document.querySelector('#buttonSignUp');
buttonSubmit.addEventListener('click', createSubmitPanel);

const buttonLogIn = document.querySelector('#buttonLogIn');
buttonLogIn.addEventListener('click', createLogInPanel);

const submitData = document.querySelector('#buttonSubmit');
submitData.addEventListener('click', saveUserData);

const closeSubmitPane = document.querySelector('#exitSignUpForm');
closeSubmitPane.addEventListener('click', closePane);

const closeLogInForm = document.querySelector('#exitLogInForm');
closeLogInForm.addEventListener('click', clouseSubmitPanel);

function createSubmitPanel(event) {
    event.preventDefault();
    let svgButton = document.getElementsByClassName("svgButton");
    for (let i = 0; i < svgButton.length; i++) {
        svgButton[i].style.visibility = "hidden";
    }
    let svgLabel = document.getElementsByClassName("svgLabel");
    for (let i = 0; i < svgButton.length; i++) {
        svgLabel[i].style.visibility = "hidden";
    }
    submitPanel.style.top = "50%";
    submitPanel.style.left = "50%";
    submitPanel.style.transform = 'translate(-50%, -50%)';

}

function createLogInPanel(event) {
    event.preventDefault();
    logInPanel.style.top = "50%";
    logInPanel.style.left = "50%";
    logInPanel.style.transform = 'translate(-50%, -50%)';

}

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

function closePane() {
    submitPanel.style.top = "-500px"
}

function clouseSubmitPanel() {
    logInPanel.style.top = "-500px"
}

function saveUserData() {
    const personData = document.getElementsByClassName('inputRegistraition');
    const userData = {
        name: personData[0].value,
        surname: personData[1].value,
        age: personData[2].value,
        pass: personData[3].value
    }

    localStorage.setItem("userdata", JSON.stringify(userData));

    const user = localStorage.getItem('userdata');
    console.log(user);

}