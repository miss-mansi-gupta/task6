window.onload = function() {
    setTimeout(logo, 1000);
    setTimeout(menu1, 1000);
}

function logo() {
    var h = document.querySelector('#logo h1');
    h.style.opacity = '1'
}

function menu1() {
    var l = document.querySelectorall('#menu1 li');
    var i;
    for (i = 0; i < l.length; i++) {
        l[i].style.opacity = '1';
        l[i].style.transform = 'translate(0)';
    }
}