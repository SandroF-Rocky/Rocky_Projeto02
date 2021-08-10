$(function(){
    $('li').click(function(){
        $(this).toggleClass('active')
        $(this).find('p')
        let this_li = $(this).html()
        
        $('li').each(function(e, li){

            if(li.innerHTML != this_li){
                $(this).removeClass('active')
            }
        })
    })
})
   