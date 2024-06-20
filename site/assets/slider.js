// Two side range input 
let sliderOne;
let sliderTwo;
let minGap = 1000;
let val1;
let val2;
let slider_track;
let maxnum;
let btn_dynamic;

let slider;
let val;
let min = 1;
let max = 24;

window.onload = function () {
    console.log('Slider started');

    sliderOne = document.getElementById('slider-1');
    sliderTwo = document.getElementById('slider-2');
    val1 = document.getElementsByClassName('min-price')[0];
    val2 = document.getElementsByClassName('max-price')[0];
    slider_track = document.getElementsByClassName('slider-track')[0];
    maxnum = sliderOne.max;
    btn_dynamic = document.getElementsByClassName('dynamic')[0];

    slider = document.getElementById('time-slider');
    val = document.getElementsByClassName('time-start')[0];

    slideTime();
    inputTime();

    slideOne();
    slideTwo();
}

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    val1.value = parseInt(sliderOne.value);
    fillColor();
    btnDynamicValuesChange();
}

function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    val2.value = parseInt(sliderTwo.value);
    fillColor();
    btnDynamicValuesChange();
}


function inputOne() {
    if (parseInt(val2.value) - parseInt(val1.value) <= minGap) {
        val1.value = parseInt(sliderTwo.value) - minGap;
    }
    sliderOne.value = parseInt(val1.value);
    fillColor();
}

function inputTwo() {
    if (parseInt(val2.value) - parseInt(val1.value) <= minGap) {
        val2.value = parseInt(sliderOne.value) + minGap;
    }
    sliderTwo.value = parseInt(val2.value);
    fillColor();
}

function fillColor() {
    percent1 = (sliderOne.value / maxnum) * 100;
    percent2 = (sliderTwo.value / maxnum) * 100;

    slider_track.style.background = `linear-gradient(to right, var(--stroke-3) ${percent1}%, var(--primary) ${percent1}%, var(--primary) ${percent2}%, var(--stroke-3) ${percent2}% )`
}


// Slider time range 

function slideTime() {
    val.value = slider.value;
    fillColor2();
    btnDynamicValuesChange();
}

function inputTime() {
    if (val.value > max) {
        val.value = max;
    }
    if (val.value < min) {
        val.value = min;
    }
    slider.value = val.value;
    fillColor2();
    btnDynamicValuesChange();
}

function fillColor2() {
    percent1 = (val.value / max) * 100;

    slider.style.background = `linear-gradient(to right, var(--primary) 0%, var(--primary) ${percent1}%, var(--stroke-3) ${percent1}%, var(--stroke-3) 100%)`
}

function btnDynamicValuesChange() {

    first_part = '';

    persons = document.getElementsByClassName('person-count')[0].value;
    if (persons == undefined || persons == '' || persons == null) {
        persons = '0';
    }

    if (parseInt(persons) == 1 || parseInt(persons) == 21) {
        first_part = 'Для ' + persons + ' человека ';
    }
    else {
        first_part = 'Для ' + persons + ' человек ';
    }

    second_part = '';

    hours = document.getElementsByClassName('hour-count')[0].value;
    if (hours == '') {
        hours = "1";
    }

    if (parseInt(hours.substr(hours.length - 1)) == 1 && parseInt(hours) != 11) {
        second_part = "на " + hours + ' час - ';
    }
    else if (parseInt(hours.substr(hours.length - 1)) == 2 |
        parseInt(hours.substr(hours.length - 1)) == 3 |
        parseInt(hours.substr(hours.length - 1)) == 4) {
        second_part = "на " + hours + ' часа - ';
    }
    else {
        second_part = "на " + hours + ' часов - ';
    }
    
    date_num = document.getElementsByClassName('date')[0].value;
    if(date_num == undefined || date_num == '' || date_num == null) {
        date_num = "2024-01-01";
    }
    third_part = date_replace(date_num);

    time_start = document.getElementsByClassName('time-start')[0].value;
    if(time_start == undefined || time_start == '' || time_start == null) {
        time_start = "1";
    }

    if (time_start.length != 2) {
        time_start = '0' + time_start;
    }

    four_part = time_start + ':00';

    btn_dynamic.textContent = first_part + second_part + third_part + four_part;
}

function date_replace(num) {
   
    let splitted = num.split('-');
    month = 'Январь';
    switch (splitted[1]) {
        case '01':  month = 'Января'; break;
        case '02':  month = 'Февраля'; break;
        case '03':  month = 'Марта'; break;
        case '04':  month = 'Апреля'; break;
        case '05':  month = 'Мая'; break;
        case '06':  month = 'Июня'; break;
        case '07':  month = 'Июля'; break;
        case '08':  month = 'Августа'; break;
        case '09':  month = 'Сентября'; break;
        case '10':  month = 'Октября'; break;
        case '11':  month = 'Ноября'; break; 
        case '12':  month = 'Декабря'; break;
        default: month = 'Неизвестно'; break;
    } 
    return splitted[2] + ' ' + month + ' ' + splitted[0] + ' с '
}