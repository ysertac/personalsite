let $svg1 = $('#svg1').drawsvg({
        duration: 5000,
        easing: 'linear',
        reverse: false,
    });

function animate1() {
    $svg1.drawsvg('animate');
    }


let $svg2 = $('#svg2').drawsvg({
        duration: 3000,
        easing: 'linear',
        reverse: false
    });

function animate2() {
    $svg2.drawsvg('animate');
    }
    
let $svg3 = $('#svg3').drawsvg({
    duration: 4000,
    easing: 'linear',
    reverse: false
});

function animate3() {
    $svg3.drawsvg('animate');
    }

let $svg4 = $('#svg4').drawsvg({
    duration: 4500,
    easing: 'linear',
    reverse: false
});

function animate4() {
    $svg4.drawsvg('animate');
    }

let $svg5 = $('#svg5').drawsvg({
    duration: 6000,
    easing: 'linear',
    reverse: false
});

function animate5() {
    $svg5.drawsvg('animate');
    }

let $svg6 = $('#svg6').drawsvg({
    duration: 4500,
    easing: 'linear',
    reverse: false
});

function animate6() {
    $svg6.drawsvg('animate');
    }

let $svg7 = $('#svg7').drawsvg({
    duration: 4500,
    easing: 'linear',
    reverse: false
});
    
function animate7() {
    $svg7.drawsvg('animate');
    }

let $svg8 = $('#svg8').drawsvg({
    duration: 4500,
    easing: 'linear',
    reverse: false
});
        
function animate8() {
    $svg8.drawsvg('animate');
    }


animate1();
animate2();
animate3();
animate4();
animate5();
animate6();
animate7();
animate8();

setInterval(function() {
    animate1();
    animate2();
    animate3();
    animate4();
    animate5();
    animate6();
    animate7();
    animate8();
}, 5000);