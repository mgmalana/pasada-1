/*
    AUTHOR: LAURENZ (laurenz@outlook.ph)
*/

$(document).ready(
    function()
    { 
        var bodyheight = $(window).height();        
        $(".windowheight").css('min-height', bodyheight);
        
        $(window).resize(
            function()
            {
                var bodyheight = $(window).height();
                $(".windowheight").css('min-height', bodyheight);
            }
        ); 
    }
);

