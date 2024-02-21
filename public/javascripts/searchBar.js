const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const form = document.getElementById('searchForm');


btn.addEventListener('mouseover', ()=>{
    if(search.classList.contains('active')){
        console.log('Search bar is active')
    }else{
        search.classList.add('active')
    }
})