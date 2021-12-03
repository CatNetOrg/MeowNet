function buttonColorFill(liColor) {
    let SwetchButton = document.getElementsByClassName('SwetchButton');
    liColor.style.backgroundColor = 'white';
    liColor.style.borderColor = 'white';
    liColor.style.opacity = '.8';


    for (let i = 0; i < SwetchButton.length; i++) {
        if (SwetchButton[i] !== liColor) {
            SwetchButton[i].style.backgroundColor = 'transparent';
            SwetchButton[i].style.borderColor = 'white';
            SwetchButton[i].style.opacity= '.3';
        }
    }

}
//.SwetchButton {
//     margin: 50%;
//     width: 12px;
//     height: 12px;
//     border-radius: 20px;
//     border: 5px solid white;;
//     opacity: .3;
//     -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
//     transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
//
// }
//
// .SwetchButton:hover {
//     border: 5px solid white;
//     opacity: .7;
// }

let SwetchButton = document.getElementsByClassName('SwetchButton');

function f(v) {
    let temp = v;
    v.style.backgroundColor = 'white';
    v.style.borderColor = 'white';
    v.style.opacity = '.7';

    if(temp !== v) {
        v.style.backgroundColor = 'transparent';
    }
}


