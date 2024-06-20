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
}

function inputTwo() {
    if (parseInt(val2.value) - parseInt(val1.value) <= minGap) {
        val2.value = parseInt(sliderOne.value) + minGap;
    }
    sliderTwo.value = parseInt(val2.value);
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

    persons = document.getElementsByClassName('person-count')[0];
    if (persons == '') {
        persons = "0";
    }

    if (parseInt(persons.value) == 1 || parseInt(persons.value) == 21) {
        first_part = 'Для ' + persons.value + ' человека ';
    }
    else {
        first_part = 'Для ' + persons.value + ' человек ';
    }

    second_part = '';

    hours = document.getElementsByClassName('hour-count')[0].value;
    if (hours == '') {
        hours = "0";
    }

    if (parseInt(hours.substr(hours.length - 1)) == 1) {
        second_part = "на " + hours + ' час';
    }
    else if (parseInt(hours.substr(hours.length - 1)) == 2 |
        parseInt(hours.substr(hours.length - 1)) == 3 |
        parseInt(hours.substr(hours.length - 1)) == 4) {
        second_part = "на " + hours + ' часа';
    }
    else {
        second_part = "на " + hours + ' часов';
    }

    console.log(first_part, second_part);

}