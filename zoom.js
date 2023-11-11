window.onload = function () {

    const zoom = document.querySelector('.image-zoom');
    const zoomImg = document.querySelector('.zoom');

    zoom.addEventListener('mousemove', (e)=>{
       
        zoomImg.style.opacity = 1;
        let positionPx = e.x - zoom.getBoundingClientRect().left;
        let positionX = (positionPx / zoom.offsetWidth) * 100;

        let positionPy = e.y - zoom.getBoundingClientRect().top;
        let positionY = (positionPy / zoom.offsetHeight) * 100;

        zoomImg.style.setProperty('$zoom-x', positionX + '%');
        zoomImg.style.setProperty('$zoom-y', positionY + '%');

        let transformX = -(positionX - 50) / 2.5;
        let transformY = -(positionY - 50) / 2.5;
        console.log("transformX", transformX)
        console.log("transformY", transformY)

        zoomImg.style.transform = `scale(2) translateX(${transformX}%) translateY(${transformY}%)`;

    })  

    zoom.addEventListener('mouseout', ()=>{
        zoomImg.style.opacity = 0;
    })
}
