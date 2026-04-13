const userImg = document.getElementById("user-pic");
const scaleRange = document.getElementById("imgScale");
const resetBtn = document.getElementById("reset");
const display = document.getElementById("display");


let imgX = 0;
let imgY = 0;

const loadFile = function(event) {
    userImg.src=URL.createObjectURL(event.target.files[0]);
    scaleRange.value = 100;
};

const up = function() {
    imgY -= 5;
    userImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
};

const down = function() {
    imgY += 5;
    userImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
};

const left = function() {
    imgX -= 5;
    userImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
};

const right = function() {
    imgX += 5;
    userImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
};

const scaleImg = function() {
    // userImg.setAttribute('height', `calc(75% * ${scaleRange.value})`);
    userImg.style.scale = scaleRange.value / 100;
}

function reset() {
    userImg.style.transform = "";
    userImg.style.scale = "";
    scaleRange.value = 100;
}

resetBtn.addEventListener("click", reset);








