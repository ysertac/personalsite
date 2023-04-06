let modGece = () => {
    body.classList = 'gece';
    nav.classList.add('gece');
    nav.classList.remove('gunduz');
    for (let i = 0; i < content.length; i++) {
        content[i].style.background = 'black';
        content[i].querySelector('h2').style.color = '#fff'; 
        content[i].querySelector('h2 span').style.color = 'lime';
    }
}

let modGunduz = () => {
    body.classList = 'gunduz';
    nav.classList.add('gunduz');
    nav.classList.remove('gece');
    for (let i = 0; i < content.length; i++) {
        content[i].style.background = '#fff';
        content[i].querySelector('h2').style.color = '#000'; 
        content[i].querySelector('h2 span').style.color = 'darkblue';
    }
}