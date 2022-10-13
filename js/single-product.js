import { searchBtn } from './app.js'

let btnsTab = document.querySelectorAll('.btns button');
let productImgs = document.querySelectorAll('.product-colors div img');
let targetTabId = null;
let targetTab = null;



// Active The Target Tab 
btnsTab.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        disableBtnAndTabPev();
        targetTabId = event.target.dataset.nametab;
        targetTab = document.getElementById(`${targetTabId}`);
        targetTab.classList.add('active-tab');
        event.target.classList.add('active-btn');
    })
})

// Show The Target Images Products
productImgs.forEach((img) => {
    img.addEventListener('click', (event) => {
        showTargetImgProduct(event)
    })
})


const showTargetImgProduct = (event) => {
    let mainImgProduct = document.querySelector('.prodcut-main-img img');
    let srcTargetImg = event.target.src;
    mainImgProduct.src = srcTargetImg;
}



// Remove Class Form Prev Btn And Tab
const disableBtnAndTabPev = () => {
    let beforeBtnActive = document.querySelector('.active-btn');
    beforeBtnActive.classList.remove('active-btn');
    let beforetABActive = document.querySelector('.active-tab');
    beforetABActive.classList.remove('active-tab');
}