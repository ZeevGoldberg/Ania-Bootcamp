const bob = document.querySelector('.face')
let count = 0

function moveBob(){
    count += 50
    console.log('Hey!');
    bob.style.left = count + 'px'
}

bob.addEventListener('click', moveBob);