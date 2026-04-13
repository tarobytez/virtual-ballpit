const $userImg = document.getElementById("user-pic");
const $scaleRange = document.getElementById("imgScale");
const $resetBtn = document.getElementById("reset");
const $modalBtn = document.getElementById("openDownload");
const $modal = document.getElementById("modal");
const $display = document.getElementById("display");


let imgX = 0;
let imgY = 0;

const loadFile = function(event) {
    $userImg.src=URL.createObjectURL(event.target.files[0]);
    reset();
    $modalBtn.disabled = false;
};


const up = function() {
    imgY -= 5;
    $userImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
};

const down = function() {
    imgY += 5;
    $userImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
};

const left = function() {
    imgX -= 5;
    $userImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
};

const right = function() {
    imgX += 5;
    $userImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
};

const scaleImg = function() {
    $userImg.style.scale = $scaleRange.value / 100;
}

function reset() {
    $userImg.style.transform = "";
    $userImg.style.scale = "";
    $scaleRange.value = 100;
    imgX = 0;
    imgY = 0;
}


// ON LOAD ACTIONS:
changeCanvasHeight();




function changeCanvasHeight() {
    // ENSURE IMAGES STAY ANCHORED LATER!
    $display.style.height = ($display.offsetWidth * 5/8) + "px";  
}

window.addEventListener("resize", changeCanvasHeight);




// MODAL 
function openModal() {
    // process img with html2canvas. For now, we will just use the src of the user image

    document.getElementById("downloadLink").href = $userImg.src;
    document.getElementById("downloadImg").src = $userImg.src;
    $modal.classList.add('show');
    document.body.classList.toggle("modal-open");

}

function closeModal() {
    $modal.classList.remove('show');
    document.body.classList.toggle("modal-open");
}




