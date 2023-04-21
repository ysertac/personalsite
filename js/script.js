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
    myIconsContent.classList.remove('gunduz');
    myIconsContent.classList.add('gece');
    for (let i = 0; i < baslik.length; i++) {
        baslik[i].style.color = '#aaa';
        baslikalti[i].style.backgroundImage = 'linear-gradient(45deg, cyan, lime)';
    }
    document.querySelector('p.yazialt').style.color = 'antiquewhite';
    for (let i = 0; i < firstDiv.length; i++) {
        firstDiv[i].style.backgroundImage = 'linear-gradient(45deg, grey, black)';
    }
    for (let i = 0; i < secondDiv.length; i++) {
        secondDiv[i].style.backgroundImage = 'linear-gradient(45deg, red, pink)';
    }
    for (let i = 0; i < svg.length; i++) {
        svg[i].querySelector('path').setAttribute('stroke', 'white');
    }
    footer.style.background = 'linear-gradient(45deg, black, dimgrey)';
    footer.style.color = 'white';
    for (let i = 0; i < socialIcons.length; i++) {
        socialIcons[i].style.color = 'greenyellow';
        $('footer a i').hover(function () {
                // over
                $(this).css('color', 'aqua');
            }, function () {
                // out
                $(this).css('color', 'greenyellow');
            }
        );
    }
    footerButton.style.backgroundColor = 'greenyellow';
    footerButton.style.color = 'black';
    $('footer button').hover(function () {
        // over
        $(this).css('backgroundColor', 'cyan');
    }, function () {
        // out
        $(this).css('backgroundColor', 'greenyellow');
    }
);

    footerButton.style.background = 'linear-gradient(to right, lime, dimgrey)'
    footerSpan[0].style.background = 'linear-gradient(to right, aqua, #0c002b)'
    footerSpan[1].style.background = 'linear-gradient(to bottom, aqua, #0c002b)'
    footerSpan[2].style.background = 'linear-gradient(to left, aqua, #0c002b)'
    footerSpan[3].style.background = 'linear-gradient(to top, aqua, #0c002b)'
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
    myIconsContent.classList.remove('gece');
    myIconsContent.classList.add('gunduz');
    for (let i = 0; i < baslik.length; i++) {
        baslik[i].style.color = '#482fcc';
        baslikalti[i].style.backgroundImage = 'linear-gradient(45deg, blue, red)';
    }
    document.querySelector('p.yazialt').style.color = '#000';
    for (let i = 0; i < firstDiv.length; i++) {
        firstDiv[i].style.backgroundImage = 'linear-gradient(45deg, aqua, blue)';
    }
    for (let i = 0; i < secondDiv.length; i++) {
        secondDiv[i].style.backgroundImage = 'linear-gradient(45deg, lime, greenyellow)';
    }
    for (let i = 0; i < svg.length; i++) {
        svg[i].querySelector('path').setAttribute('stroke', 'black');
    }
    footer.style.background = 'linear-gradient(45deg, cyan, whitesmoke, grey)';
    footer.style.color = 'black';
    for (let i = 0; i < socialIcons.length; i++) {
        socialIcons[i].style.color = 'black';
        $('footer a i').hover(function () {
                // over
                $(this).css('color', 'darkblue');
            }, function () {
                // out
                $(this).css('color', 'black');
            }
        );
    }
    footerButton.style.background = 'linear-gradient(to right, aqua, antiquewhite)'
    footerSpan[0].style.background = 'linear-gradient(to right, antiquewhite, #0c002b)'
    footerSpan[1].style.background = 'linear-gradient(to bottom, antiquewhite, #0c002b)'
    footerSpan[2].style.background = 'linear-gradient(to left, antiquewhite, #0c002b)'
    footerSpan[3].style.background = 'linear-gradient(to top, antiquewhite, #0c002b)'
}

