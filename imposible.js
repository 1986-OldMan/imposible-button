
document.querySelector('.btn-dark').addEventListener('mouseover', moveButton);



let position = 'right'

function moveButton(button) {
    let buttonHtml = button.target;


    if (position === 'left') {

        buttonHtml.style.gridArea = '3/3/4/4';
        position = 'right';

    } else if (position === 'right') {

        buttonHtml.style.gridArea = '5/5/5/5';
        position = 'left';

    }

    document.getElementById("info").innerHTML = "Come on click on the button";


    console.log('imposible button move');



}

