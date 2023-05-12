let selectedElement = null;
let start = {x: 0, y: 0};

document.addEventListener('mousedown', function (event) {
    if (event.target.classList.contains('target')) {
        selectedElement = event.target;
        selectedElement.style.backgroundColor = 'green';
        start.x = selectedElement.style.left;
        start.y = selectedElement.style.top;
    }
});


document.addEventListener('mousemove', function (event) {
    console.log("11")
        selectedElement.style.left = (event.clientX) + 'px';
        selectedElement.style.top = (event.clientY) + 'px';
});


document.addEventListener('mouseup', function (event) {
        selectedElement.style.backgroundColor = '';
        selectedElement = null;
});


document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('target')) {
        selectedElement = event.target;
        selectedElement.style.backgroundColor = 'purple';

        start.x = selectedElement.style.left;
        start.y = selectedElement.style.top;
    }
});


document.addEventListener('keyup', function (event) {
        if (event.key === 'Escape' && selectedElement != null) {
            selectedElement.style.backgroundColor = '';
            selectedElement.style.left = start.x;
            selectedElement.style.top = start.y;
            selectedElement = null;
        }
});