$(document).ready(function () {
    console.log("ready!");

    // Filter inputs FOCUS event 
    $('.row.first input').on('focus', function () {
        $(this).closest('.input__holder').addClass('focused');
    });

    $('.row.first input').on('focusout', function () {
        $(this).closest('.input__holder').removeClass('focused');
    });

});