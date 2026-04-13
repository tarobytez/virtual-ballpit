const userImg = document.getElementById("user-pic");
const scaleRange = document.getElementById("imgScale");

const loadFile = function(event) {
    userImg.src=URL.createObjectURL(event.target.files[0]);
};

let imgX = 0;
let imgY = 0;

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


const updateImgSize = function() {
    // userImg.setAttribute('height', `calc(75% * ${scaleRange.value})`);
    userImg.style.scale = scaleRange.value / 100;
}







