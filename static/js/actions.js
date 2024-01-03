// choose image
var ChooseImageBtn = document.getElementById('UploadImg');
var imgInput = document.getElementById('ImageFile');
let img = document.createElement('img');
var iamgeContainer = document.querySelector('.image');

ChooseImageBtn.addEventListener('click',function(){
    imgInput.click()
})

imgInput.addEventListener('change',function(e){
    img.setAttribute('src',URL.createObjectURL(e.target.files[0]));
    
    iamgeContainer.innerHTML = '';
    iamgeContainer.appendChild(img)
})



// Control actions

let br_val = 1;
let con_val = 1;
let sat_val = 1;

let has_grayscale = false;
let has_sepia = false;

var brightness = document.getElementById('brithnessVal');
var contrast = document.getElementById('contrastVal');
var saturate = document.getElementById('saturateVal');

var grayscale = document.getElementById('has_grayscale');
var sepia = document.getElementById('has_sepia');


function UpdateImage (){
    
    let filter = `contrast(${con_val}) brightness(${br_val}) saturate(${sat_val})`;

    if (has_sepia){
        filter += " sepia(1)";
    }else(
        filter.replace('sepia(1)',"")
    )
    
    if (has_grayscale){
        filter += " grayscale(1)";
    }else(
        filter.replace('grayscale(1)',"")
    )

    img.style.filter = filter
}

brightness.addEventListener('change',()=>{
    br_val = parseInt(brightness.value) / 10 ;
    UpdateImage()
})


contrast.addEventListener('change',()=>{
    con_val = parseInt(contrast.value) / 10 ;
    UpdateImage()
})

saturate.addEventListener('change',()=>{
    sat_val = parseInt(saturate.value) / 10 ;
    UpdateImage()
})



sepia.addEventListener('change',function(){
    if (sepia.checked){
        has_sepia = true;
        UpdateImage()
    }else{
        has_sepia = false;
        UpdateImage()    
    }
})

grayscale.addEventListener('change',function(){
    if (grayscale.checked){
        has_grayscale = true;
        UpdateImage()
    }else{
        has_grayscale = false;
        UpdateImage()
    }
})





