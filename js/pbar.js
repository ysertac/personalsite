let progressBar = document.getElementById('progressBar');
let totalHeight = document.querySelector('body').scrollHeight - window.innerHeight;

window.onscroll = () => {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.height = progressHeight + "%";
}