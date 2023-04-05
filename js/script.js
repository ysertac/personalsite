let modGece = () => {
    body.classList = 'gece';
    nav.classList.add('gece');
    nav.classList.remove('gunduz');
}

let modGunduz = () => {
    body.classList = 'gunduz';
    nav.classList.add('gunduz');
    nav.classList.remove('gece');
}