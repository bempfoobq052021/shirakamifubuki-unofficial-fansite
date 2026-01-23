var rotated = false;

export function letter_opening_animation(elementname, rotation, )

document.getElementById('button').onclick = function() {
    var div = document.getElementById('div'),
        deg = rotated ? 0 : 66;

    div.style.webkitTransform = 'rotate('+deg+'deg)'; 
    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
    div.style.msTransform     = 'rotate('+deg+'deg)'; 
    div.style.oTransform      = 'rotate('+deg+'deg)'; 
    div.style.transform       = 'rotate('+deg+'deg)'; 

    rotated = !rotated;
}