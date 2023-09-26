const pickButton = document.getElementById('pick_button');
const body = document.querySelector('body');
const colorCode = document.getElementById('color_code');
const copyButton = document.getElementById('copy_button');
const gradient_btn = document.querySelector('#gradient_btn');
const close_btn = document.querySelector('.close_gradient');



function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).toUpperCase();
}

function setColor() {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
}

pickButton.addEventListener('click', setColor);

copyButton.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    textArea.value = colorCode.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
});

// 
gradient_btn.addEventListener('click', function(){

    document.querySelector('.btn_gradient').style.position = "relative";
    document.querySelector('.btn_gradient').style.visibility = "visible";
    document.querySelector('#pick_button').style.visibility = "hidden";
});

close_btn.addEventListener('click', function(){
    document.querySelector('.btn_gradient').style.position = "absolute";
    document.querySelector('.btn_gradient').style.visibility = "hidden";
    document.querySelector('#pick_button').style.visibility = "visible";
});

const first = document.querySelector(".first");
const second = document.querySelector(".second");
function gradient() {
    body.style.background = `linear-gradient(to right, ${first.value}, ${second.value})`;
}

first.addEventListener('input', gradient);

second.addEventListener('input', gradient);