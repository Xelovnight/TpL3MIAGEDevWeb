const contentDiv = document.querySelector('.content');
const mousePositionDiv = document.querySelector('.mousemove');
const mousePositionP = document.getElementById('mouse-position');
const header = document.querySelector('header');
const scroll = document.querySelector('#scroll-position');
const inputField = document.getElementById('name-input');
const form = document.getElementById('input-form');
const mouseFollowDiv = document.querySelector('.mouse-follow');
const mouseFollow = document.getElementById('mouse-follow');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

contentDiv.addEventListener('click', () => {
   contentDiv.style.backgroundColor = getRandomColor();
});

mousePositionDiv.addEventListener('mousemove', (event) => {
    mousePositionP.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});

mouseFollowDiv.style.position = 'absolute';
document.addEventListener('mousemove', (event) => {
    mouseFollowDiv.style.left = event.pageX + 'px';
    mouseFollowDiv.style.top = event.pageY + 'px';
    mousePositionP.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});

window.addEventListener('scroll', () => {
    scroll.textContent = `Scroll Y: ${window.scrollY}`;
    //alert(`Scroll Y: ${window.scrollY}`);
    header.style.backgroundColor = getRandomColor();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(inputField.value.trim() === '') {
        alert('Vide');
    }else{
        alert(inputField.value);
    }
});

