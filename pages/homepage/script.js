const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', ()=>{
    if(search.classList.contains('active')){
        //implement search functionality
        console.log("OTIS")
    }else{
        search.classList.add('active')
    }
})