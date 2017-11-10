function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hightlightBorder(selector, borderWidth, borderStyle) {
    if (!borderWidth) borderWidth = "1px"
    if (!borderStyle) borderStyle = "solid"
    var all = document.querySelectorAll(selector? selector : "body *");

    for (var i=0, max=all.length; i < max; i++) {
        all[i].style.border = borderWidth + " " + borderStyle + " " + getRandomColor();
    }
}

hightlightBorder("body > * > div, header, footer");