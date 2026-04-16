const $userImg = document.getElementById("user-pic");
const $scaleRange = document.getElementById("imgScale");
const $resetBtn = document.getElementById("reset");
const $modalCapBtn = document.getElementById("openDownload");
const $modal = document.getElementById("modal");
const $display = document.getElementById("display");
const $canvas = document.getElementById("canvas");
const $previewPic = document.getElementById("previewPic")

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

function captureImg() {

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




