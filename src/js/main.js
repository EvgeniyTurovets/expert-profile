const person__menu__btn = document.getElementById('person__menu__btn')
const person = document.querySelector('.person')
person__menu__btn.addEventListener('click', function(){
    person.classList.toggle('open')
})

document.addEventListener('click', (e) => {
    
    if(!e.target.closest('.person')){
        person.classList.remove('open')
    }
})

const openSearch = document.getElementById('open-search')

openSearch.addEventListener('click', ()=>{
    openSearch.classList.toggle('active')
    document.querySelector('.header__search').classList.toggle('active')
})