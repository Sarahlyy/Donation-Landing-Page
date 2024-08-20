const btn = document.getElementById("donate_button")
btn.onclick = function () {
    console.log('button has been clicked')
    alert('Donate money');
}

const buttonLeft = document.getElementById('left');
buttonLeft.onclick = function () {
    document.getElementById('parent').scrollLeft -= 300;
    
};


const buttonRight = document.getElementById('right');
buttonRight.onclick = function () {
    document.getElementById('parent').scrollLeft += 300;
};






