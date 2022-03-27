let button = document.querySelector('.fas.fa-bars');

function myfunction(){
    let menu = document.querySelector('.hamburger-menu');
    menu.classList.add('active')
    console.log(menu)
}

button.addEventListener('click', myfunction )

let crossButton = document.querySelector('.close');

function myfunction2(){
    let menu = document.querySelector('.hamburger-menu');
    menu.classList.remove('active')
    console.log(menu)
}

crossButton.addEventListener('click', myfunction2);