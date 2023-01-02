
document.querySelector('.btn-dark').addEventListener('mouseover', moveButton);


let position = 'right'

function moveButton(button) {
    let buttonHtml = button.target;


    if (position === 'left') {

        buttonHtml.style.gridArea = '5/4/5/5';
        position = 'right';

    } else if (position === 'right') {

        buttonHtml.style.gridArea = '3/5/5/5';
        position = 'left';

    }

    console.log('imposible button move')

}

