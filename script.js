// JavaScript code for the image hover effect 

const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    container.addEventListener('mouseover', () => {
        const image = container.querySelector('img');
        image.style.transform = 'scale(2.1)';
    });

    container.addEventListener('mouseout', () => {
        const image = container.querySelector('img');
        image.style.transform = 'scale(1)';
    });
});

