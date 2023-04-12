let modGece = () => {
    body.classList = 'gece';
    nav.classList.add('gece');
    nav.classList.remove('gunduz');
    for (let i = 0; i < content.length; i++) {
        content[i].style.background = 'black';
        content[i].querySelector('h2').style.color = '#fff'; 
        content[i].querySelector('h2 span').style.color = 'lime';
    }
    for (let i = 0; i < navLink.length; i++) {
        if (navLink[i].classList.contains('active')) {
            navLink[i].style.borderBottom = '2px solid orange';
        }
        navLink[i].addEventListener('mouseover', () => {
            if (!(navLink[i].classList.contains('active'))) {
                navLink[i].style.borderBottom = '2px solid aqua';
            }
        })
        navLink[i].addEventListener('mouseout', () => {
            if (!(navLink[i].classList.contains('active'))) {
                navLink[i].style.borderBottom = 'none';
            }
        })
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
    for (let i = 0; i < navLink.length; i++) {
        if (navLink[i].classList.contains('active')) {
            navLink[i].style.borderBottom = '2px solid black';
        }
        navLink[i].addEventListener('mouseover', () => {
            if (!(navLink[i].classList.contains('active'))) {
                navLink[i].style.borderBottom = '2px solid brown';
            }
        })
        navLink[i].addEventListener('mouseout', () => {
            if (!(navLink[i].classList.contains('active'))) {
                navLink[i].style.borderBottom = 'none';
            }
        })
    }
}