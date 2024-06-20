$(document).ready(function () {
    console.log('Modals ready!');
    class Modals {
        constructor() {
            this.main_modal = $('#main-modal');
            this.success_modal = $('#success-modal');
        }

        openModal(el) {
            let image = el.find('.image__holder').find('img').attr('src');
            this.main_modal.find('img').attr('src', image);

            this.main_modal.addClass('opened');
        }

        sendModal() {
            let is_ok = true;
            this.main_modal.find('input').each(function () {
                if ($(this).attr('required')) {
                    if ($(this).val() == '') {
                        $(this).closest('.input__holder').addClass('error');
                        setTimeout(() => { $(this).closest('.input__holder').removeClass('error'); }, "3000");
                        is_ok = false;
                    }
                }
            });

            let phone_el = this.main_modal.find('.phone');
            if (phone_el.val().length < 5) {
                phone_el.closest('.input__holder').addClass('error');
                setTimeout(() => { phone_el.closest('.input__holder').removeClass('error'); }, "3000");
                is_ok = false;
            }

            if (is_ok) {

                // ajax example
                // $.ajax({
                //     url: 'privacy.html',
                //     success: function(data){
                //          this.main_modal.removeClass('opened');
                //     }
                // });

                this.main_modal.removeClass('opened');
                setTimeout(() => { this.success_modal.addClass('opened'); }, "500");
                
            }
        }

        closeModal(el) {
            el.closest('.modal').removeClass('opened');
        }
    }

    let modal_controller = new Modals();
    $('body').on('click', 'a[modal]', function () { modal_controller.openModal($(this)) });
    $('body').on('click', '.close-modal, .close', function () { modal_controller.closeModal($(this)) });
    $('#main-modal').on("click", '.submit', function () { modal_controller.sendModal() });
});