
const imageSelected = document.querySelector("#selectd-image")

const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")

img1.addEventListener('click', function(){
    imageSelected.src = img1.src
});

img2.addEventListener('click', function(){
    imageSelected.src = img2.src
});

img3.addEventListener('click', function(){
    imageSelected.src = img3.src
});
