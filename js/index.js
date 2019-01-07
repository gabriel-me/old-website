let buttons = document.querySelectorAll('main #presentation section button, main article img');
let presentation = document.getElementById('presentation');
let article = document.querySelector('main article');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (article.style.display != 'flex') {
            article.style.display = 'flex';
            if (window.innerWidth > 1000) {
                presentation.style.width = '25%';
                presentation.style.borderRight = '1px solid #D8D8D8';
                article.style.marginLeft = '25%';
                article.style.width = '75%';
            } else {
                presentation.style.display = 'none';
                article.style.marginLeft = '0';
                article.style.width = '100%';
            }
        } else {
            presentation.style.display = 'flex';
            presentation.style.width = '100%';
            presentation.style.border = 'none';
            article.style.display = 'none'
        }
    });
});

document.body.onresize = () => {
    if (article.style.display == 'flex' && window.innerWidth < 1000) {
        presentation.style.display = 'none';
        article.style.marginLeft = '0';
        article.style.width = '100%';
    } else if (article.style.display == 'flex' && presentation.style.display != 'flex' && window.innerWidth > 999) {
        presentation.style.display = 'flex';
        presentation.style.width = '25%';
        article.style.marginLeft = '25%';
        article.style.width = '75%';
    }
};