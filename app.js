let dragon = document.querySelector('.dragon');

function onPageLoad() {
    movingImage();
}

function movingImage() {
    dragon.style.position="absolute";
    dragon.style.top="0";
    dragon.style.left="0";

    function movingDown(){
        dragon.animate([
            { transform: 'translateY(0px)'},
            { transform: 'translateY(700px)'},
        ], {
            duration: 2000,
            iterations: Infinity
        }, 
        );
        }
        
    movingDown()
}

window.onload = onPageLoad;