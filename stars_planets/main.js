document.addEventListener("DOMContentLoaded", () => {
    const object = document.body.getAttribute("data-planet");

    if (object === "sun") {
        const slideshows = [
            {
                imageList: [
                    "../images/sun/nasa_parker.jpg",
                    "../images/sun/nasa_parker_1.jpg",
                    "../images/sun/nasa_parker_2.jpg",
                    "../images/sun/nasa_parker_3.jpg",
                ],
                elementId: "cycling-parker",
            },
            {
                imageList: [
                    "../images/sun/sun_structure.jpg",
                    "../images/sun/sun_surface.jpg",
                ],
                elementId: "cycling-structure",
            },
        ];
    
        slideshows.forEach(({ imageList, elementId }) => {
            let currentImage = 0;
            const imgElement = document.getElementById(elementId);
            let intervalId;
    
            const startSlideshow = () => {
                intervalId = setInterval(() => {
                    currentImage = (currentImage + 1) % imageList.length;
                    imgElement.src = imageList[currentImage];
                }, 1000);
            };
    
            const stopSlideshow = () => {
                clearInterval(intervalId);
            };
    
            imgElement.addEventListener("mouseenter", stopSlideshow);
            imgElement.addEventListener("mouseleave", startSlideshow);
            startSlideshow();
        });
    }
});
