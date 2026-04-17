const $userImg = document.getElementById("user-pic");
const $scaleRange = document.getElementById("imgScale");
const $resetBtn = document.getElementById("reset");
const $modalCapBtn = document.getElementById("openDownload");
const $modal = document.getElementById("modal");
const $display = document.getElementById("display");
const $canvas = document.getElementById("canvas");
const $previewPic = document.getElementById("previewPic")
const $color1 = document.getElementById("color-1");
const $color2 = document.getElementById("color-2");
const $color3 = document.getElementById("color-3");
const $color4 = document.getElementById("color-4");

const $allColor1 = document.querySelectorAll(".color-1")
const $allColor2 = document.querySelectorAll(".color-2")
const $allColor3 = document.querySelectorAll(".color-3")
const $allColor4 = document.querySelectorAll(".color-4")


let imgX = 0;
let imgY = 0;

let imgURL;

const loadFile = function(event) {
    $userImg.src=URL.createObjectURL(event.target.files[0]);
    reset();
    $modalCapBtn.disabled = false;
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


// ON LOAD ACTIONS:
changeCanvasHeight();
setBallColor();


window.addEventListener("resize", changeCanvasHeight);

$modalCapBtn.addEventListener("click", async () => {
    let canvas = await html2canvas($canvas);

    canvas.toBlob((blob) =>{
        imgURL = URL.createObjectURL(blob);
        document.getElementById("downloadLink").href = imgURL;
        document.getElementById("downloadImg").src = imgURL;
    })

    openModal();
})

$color1.addEventListener("change", setBallColor); 
$color2.addEventListener("change", setBallColor); 
$color3.addEventListener("change", setBallColor); 
$color4.addEventListener("change", setBallColor); 


function setBallColor() {
    $allColor1.forEach(element => {
        element.style.fill = $color1.value;
    });

    $allColor2.forEach(element => {
        element.style.fill = $color2.value;
    });

    $allColor3.forEach(element => {
        element.style.fill = $color3.value;
    });

    $allColor4.forEach(element => {
        element.style.fill = $color4.value;
    });
}


function addClass(str) {

}

function reset() {
    $userImg.style.transform = "";
    $userImg.style.scale = "";
    $scaleRange.value = 100;
    imgX = 0;
    imgY = 0;
}


function changeCanvasHeight() {
    // ENSURE IMAGES STAY ANCHORED LATER!
    $display.style.height = ($display.offsetWidth * 5/8) + "px";  
}



// MODAL 
function openModal() {
    // process img with html2canvas. For now, we will just use the src of the user image
    $modal.classList.add('show');
    document.body.classList.toggle("modal-open");
}

function closeModal() {
    $modal.classList.remove('show');
    document.body.classList.toggle("modal-open");
    URL.revokeObjectURL(imgURL);
}




