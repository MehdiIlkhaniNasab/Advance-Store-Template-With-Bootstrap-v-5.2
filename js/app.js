let searchBtn = document.querySelector('.search span');



searchBtn.addEventListener('click', () => {
    let formSearch = document.querySelector('.form-search');
    formSearch.classList.toggle('active-search')
})