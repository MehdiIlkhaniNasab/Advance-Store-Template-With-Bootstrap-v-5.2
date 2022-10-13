import { searchBtn } from './app.js'

let btnsTab = document.querySelectorAll('.btns button');
let targetTabId = null;
let targetTab = null;



btnsTab.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        disableBtnAndTabPev();
        targetTabId = event.target.dataset.nametab;
        targetTab = document.getElementById(`${targetTabId}`);
        targetTab.classList.add('active-tab');
        event.target.classList.add('active-btn');
    })
})



// Remove Class Form Prev Btn And Tab
function disableBtnAndTabPev() {
    let beforeBtnActive = document.querySelector('.active-btn');
    beforeBtnActive.classList.remove('active-btn');
    let beforetABActive = document.querySelector('.active-tab');
    beforetABActive.classList.remove('active-tab'); 
}