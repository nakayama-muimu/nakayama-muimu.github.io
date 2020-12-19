(function(){'use strict'

window.addEventListener('load', init);


var evPress;

function init(){
    evPress = ('ontouchend' in window) ? 'touchend' : 'click';
}


function gebi(id){
    return document.getElementById(id);
}

}())