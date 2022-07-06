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
    
    if(document.querySelectorAll(".mask").length){
        Inputmask().mask(document.querySelectorAll(".mask"));
    }
    

    $('.search-input input').on('focus', function(){
        $(this).closest('.search-input').addClass('focus')
    })

    $('.search-input input').on('blur', function(){
        $(this).closest('.search-input').removeClass('focus')
    })

    $(".js-selectize").selectize({
        persist: true,
        onDropdownOpen: function(){
            var value = this.getValue();
            this.clear();
            this.$control_input.val(value);
        }
    })

    $('.filter__title').on('click', function(){
        if($(window).width() < 992){
            $(this).toggleClass('active')
            $('.filter__content').slideToggle()
        }
    })

    $('.exp-profile__rate').on('mouseenter', function(){
        $(this).addClass('active')
    })
    $('.exp-profile__rate .tooltips').on('mouseleave', function(){
        $(this).closest('.exp-profile__rate').removeClass('active')
    })

    $('.exp-profile__tabs__nav li').on('click', function(){
        var index = $(this).index()
        $('.exp-profile__tabs__nav li').removeClass('active')
        $(this).addClass('active')
        $('.exp-profile__tabs__content').removeClass('active')
        $('.exp-profile__tabs__content').eq(index).addClass('active')
    })

    $('.tabs-nav a').on('click', function(){
        if(!$(this).hasClass('active')){
            $(this).closest('.tabs-nav').find('a').removeClass('active')
            $(this).addClass('active')

            let itemIndex = $(this).attr('data-tabs-item')
            let tabsId = $(this).closest('.tabs-nav').attr('data-tabs')

            changeTabs(tabsId, itemIndex)
        }
    })

    function changeTabs (tabsid, itemIndex) {
        $(tabsid).find('.tabs__item').hide()
        $(tabsid).find('.tabs__item').eq(itemIndex).fadeIn(300)
    }

    $('#inputfile').on('change', function(){
        let file = $("#inputfile")[0].files[0]; 
        $(this).closest('.app__file').addClass('active')
        $('#filename').text(file.name)
    })

    $('.app__file').on('dragover', function(){
        $(this).addClass('hover')
    })

    $('.app__file').on('dragleave', function(){
        $(this).removeClass('hover')
    })

    $('.upload-wrap__col input').on('change', function(){
        let file = $(this)[0].files[0]; 
        $(this).closest('.upload-wrap__col').addClass('upload')
        $(this).closest('.upload-wrap__col').find('.upload-wrap__text--file').text(file.name)
    })

    $('.upload-wrap__col').on('dragover', function(){
        $(this).addClass('hover')
    })

    $('.upload-wrap__col').on('dragleave', function(){
        $(this).removeClass('hover')
    })

    $('.upload-wrap__col .upload-wrap__col__button').on('click', function(){
        $(this).closest('.upload-wrap__col').removeClass('upload').find('input').val(null)
    })


    $('.exp-modal__file input').on('change', function(evt){
        let $parent = $(this).closest('.exp-modal__file') 
        $parent.addClass('upload')
    })

    $('#addExpBlock').on('click', function(){
        let $expBlocks = $('.expirience-block--education').clone();
        let $newBlock = $expBlocks.eq($expBlocks.length - 1)
        let $newSelectName = '';
        $newBlock.find('select').each(function(index, el){
            if(!$newSelectName){
                $newSelectName = $(el).attr('name') + '1';
            }
            
            $(el).attr('name', $newSelectName)

            let $parent = $(el).closest('.custom-select')
            $parent.find('.select-selected').remove()
            $parent.find('.select-items').remove()
            $parent.attr('class', 'custom-select ' + $newSelectName)
        })
        $newBlock.find('input').attr('name', $newBlock.find('input').attr('name') + '1').val('')
        $newBlock.appendTo(".expirience-blocks-new");
        if($('.expirience-blocks-new').find('.expirience-block--education').length > 0){
            $('.expirience-blocks-new').addClass('not-empty')
        }
        customSelectInit($newSelectName)
    })

    $('#removeExpBlock').on('click', function(){
        let indexLastBlock = $('.expirience-blocks-new').find('.expirience-block--education').length - 1
        console.log(indexLastBlock)
        $('.expirience-blocks-new').find('.expirience-block--education').eq(indexLastBlock).remove()
        if(!$('.expirience-blocks-new').find('.expirience-block--education').length > 0){
            $('.expirience-blocks-new').removeClass('not-empty')
        }
       
    })

    $('#addLangBlock').on('click', function(){
        let $expBlocks = $('.expirience-block--lang').clone();
        let $newBlock = $expBlocks.eq($expBlocks.length - 1)
        let $newSelectName = '';
        $newBlock.find('select').each(function(index, el){
            if(!$newSelectName){
                $newSelectName = $(el).attr('name') + '1';
            }
            
            $(el).attr('name', $newSelectName)

            let $parent = $(el).closest('.custom-select')
            $parent.find('.select-selected').remove()
            $parent.find('.select-items').remove()
            $parent.attr('class', 'custom-select ' + $newSelectName)
        })
        // $newBlock.find('input').attr('name', $newBlock.find('input').attr('name') + '1').val('')
        $newBlock.appendTo(".expirience-blocks-lang-new");
        if($('.expirience-blocks-lang-new').find('.expirience-block--lang').length > 0){
            $('.expirience-blocks-lang-new').addClass('not-empty')
        }
        
        customSelectInit($newSelectName)
    })

    $('#removeLangBlock').on('click', function(){
        let indexLastBlock = $('.expirience-blocks-lang-new').find('.expirience-block--lang').length - 1
        console.log(indexLastBlock)
        $('.expirience-blocks-lang-new').find('.expirience-block--lang').eq(indexLastBlock).remove()
        if(!$('.expirience-blocks-lang-new').find('.expirience-block--lang').length > 0){
            $('.expirience-blocks-lang-new').removeClass('not-empty')
        }
        
    })

    $('#selectChangePhoto').on('click', function(){
        $(this).toggleClass('select-arrow-active')
        $(this).next('.select-items--about').toggleClass('select-hide--about')
    })

    $(document).mouseup(function (e) {
        var container = $(".custom-select--about");
        if (container.has(e.target).length === 0){
            $('#selectChangePhoto').removeClass('select-arrow-active')
            $('#selectChangePhoto').next('.select-items--about').addClass('select-hide--about')
        }
    });

    $('.form-check-input__another').on('change', function(){
        $('#form-check-input__another').fadeToggle(200)
    })
})

