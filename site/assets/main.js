$(document).ready(function () {
    console.log("ready!");

    if (($(window).width() > 375)) {
        // Filter inputs FOCUS event 
        $('input:not([type="range"])').on('focus', function () {
            $(this).closest('.input__holder').addClass('focused');
        });

        $('input:not([type="range"])').on('focusout', function () {
            $(this).closest('.input__holder').removeClass('focused');
        });



        $('.yacht__obj:not(.hovered)').on('mouseenter', function () {

            var state = $(this).find(".hidden").attr('style');
            if (state == '' || state == 'display: none;' || state == undefined) {
                $(this).addClass('hovered');
                // $(this).find('.hidden-buttons').slideDown({
                //     start: function () {
                //         $(this).css({
                //             display: "flex"
                //         })
                //     }
                // });
                $(this).find('.hidden').slideDown({
                    duration: 300,
                });
            }
        });

        $('.yacht__obj').on('mouseleave', function () {
            // $(this).find('.hidden-buttons').slideUp();
            $(this).find('.hidden').slideUp();
            $(this).removeClass('hovered')
            // setTimeout(() => $(this).removeClass('hovered'), 500);
        });

    }

    // Some media elements
    resize_changes();
    $(window).on('resize', function () { resize_changes() });

    function resize_changes() {
        if ($(window).width() <= 1500) {
            $('#catalog .yacht__obj').each(function () { $(this).find('.info-title:first').html('Рек. цена') });
        }
        if ($(window).width() <= 700) {
            $('#main-form .title').html('Бронирование яхт в Дубае');
        }
        if ($(window).width() <= 500) {
           
        }
    }
});
