let tw, gi, fb, tw2, fb2, gi2, em;

function url(url) {
    return window.open(url);
}

function id(id) {
    return document.getElementById(id);
}

id('tw').onclick = function () {
    url('https://twitter.com/');
};

id('gi').onclick = function () {
    url('https://github.com/');
};

id('fb').onclick = function () {
    url('https://facebook.com/');
};

id('tw2').onclick = function () {
    url('https://twitter.com/');
};

id('gi2').onclick = function () {
    url('https://github.com/');
};

id('fb2').onclick = function () {
    url('https://facebook.com/');
};

id('em').onclick = function () {
    window.location.href = 'mailto:johndoe@example.de';
};
