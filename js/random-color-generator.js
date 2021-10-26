function setRandomColour () {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        // color += letters[Math.round(Math.random() * 15)];
    }

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('topline').style.backgroundColor = '#' + randomColor;
}

setRandomColour();
