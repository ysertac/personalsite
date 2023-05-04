let mobileInternal = document.getElementById('mobileInternal');
let tabletInternal = document.getElementById('tabletInternal');

setInterval(() => {
    if(mobileInternal.classList.contains('mobilest')) {
        mobileInternal.classList = 'mobilend';
    }
    else if (mobileInternal.classList.contains('mobilend')) {
        mobileInternal.classList = 'mobilest';
    }
    else {
        console.log('OK');
    }
}, 2000)

setInterval(() => {
    if(tabletInternal.classList.contains('tablest')) {
        tabletInternal.classList = 'tablend';
    }
    else if (tabletInternal.classList.contains('tablend')) {
        tabletInternal.classList = 'tablest';
    }
    else {
        console.log('OK');
    }
}, 2000)