const imageZoomElements = document.querySelectorAll('.image-zoom');
const zoomElements = document.querySelectorAll('.zoom');

for(i=0; i<imageZoomElements.length; i++) {
    const imageZoom = imageZoomElements[i];
    const zoom = zoomElements[i];

    imageZoom.addEventListener('mousemove', (event) => zoomIn(event, imageZoom, zoom))  
    imageZoom.addEventListener('mouseout', ()=> { zoom.style.opacity = 0; })
}

function zoomIn(event, imageZoom, zoom) {
    zoom.style.opacity = 1;
    let positionPx = event.x - imageZoom.getBoundingClientRect().left;
    let positionX = (positionPx / imageZoom.offsetWidth) * 100;

    let positionPy = event.y - imageZoom.getBoundingClientRect().top;
    let positionY = (positionPy / imageZoom.offsetHeight) * 100;

    zoom.style.setProperty('--zoom-x', positionX + '%');
    zoom.style.setProperty('--zoom-y', positionY + '%');

    let transformX = -(positionX - 50) / 2.5;
    let transformY = -(positionY - 50) / 2.5;

    zoom.style.transform = `scale(2) translateX(${transformX}%) translateY(${transformY}%)`;
}