$(function(){
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
    
    Inputmask().mask(document.querySelectorAll(".mask"));

    $('.search-input input').on('focus', function(){
        $(this).closest('.search-input').addClass('focus')
    })

    $('.search-input input').on('blur', function(){
        $(this).closest('.search-input').removeClass('focus')
    })

    $(".js-selectize").selectize()

    $('.filter__title').on('click', function(){
        if($(window).width() < 992){
            $(this).toggleClass('active')
            $('.filter__content').slideToggle()
        }
    })
})

