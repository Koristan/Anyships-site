$(document).ready(function () {
    console.log('catalog_limit ready!');

    class SeeMoreButton {
        constructor(container, limit) {
            this.container = container;
            this.limit = limit;
        }

        check_items(obj_class, reversed) {
            let counter = 0;
            let limit = this.limit;
            $(obj_class).each(function () {
                counter += 1;
                if (reversed) {
                    if (counter <= limit) {
                        $(this).removeClass('hide');
                    }
                }
                else {
                    if (counter > limit) {
                        $(this).addClass('hide');
                    }
                }

            });

            if (counter > limit) {
                let btn_text = '<div class="btn-see-more"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33333 9.16667H9.66667V0.833333C9.66667 0.61232 9.75446 0.400358 9.91074 0.244078C10.067 0.0877975 10.279 0 10.5 0C10.721 0 10.933 0.0877975 11.0893 0.244078C11.2455 0.400358 11.3333 0.61232 11.3333 0.833333V9.16667H19.6667C19.8877 9.16667 20.0996 9.25446 20.2559 9.41074C20.4122 9.56702 20.5 9.77899 20.5 10C20.5 10.221 20.4122 10.433 20.2559 10.5893C20.0996 10.7455 19.8877 10.8333 19.6667 10.8333H11.3333V19.1667C11.3333 19.3877 11.2455 19.5996 11.0893 19.7559C10.933 19.9122 10.721 20 10.5 20C10.279 20 10.067 19.9122 9.91074 19.7559C9.75446 19.5996 9.66667 19.3877 9.66667 19.1667V10.8333H1.33333C1.11232 10.8333 0.900358 10.7455 0.744078 10.5893C0.587797 10.433 0.5 10.221 0.5 10C0.5 9.77899 0.587797 9.56702 0.744078 9.41074C0.900358 9.25446 1.11232 9.16667 1.33333 9.16667Z" fill="black" /></svg> <p> Показать больше яхт </p></div>'
                $(this.container).append(btn_text);
            }
        }
    }

    let lim = 20

    if ($(window).width() <= 1280) {
        lim = 12;
    }
    if ($(window).width() <= 1000) {
        lim = 8;
    }
    if ($(window).width() <= 700) {
        lim = 4;
    }

    let btn_controller = new SeeMoreButton('#catalog .container', lim);
    btn_controller.check_items('.yacht__obj');

    $('body').on('click', '.btn-see-more', function () { $(this).hide(); btn_controller.check_items('.yacht__obj.hide', true); });

});