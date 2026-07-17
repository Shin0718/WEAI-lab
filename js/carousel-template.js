// Carousel rendering system for PeAR Lab homepage
// Dynamically generates carousel slides from carousel-data.js

function renderCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');

    if (!carouselInner || !carouselIndicators) {
        console.error('Carousel containers not found');
        return;
    }

    // Filter only active slides
    const activeSlides = carouselSlides.filter(slide => slide.active);

    if (activeSlides.length === 0) {
        console.warn('No active carousel slides found');
        return;
    }

    // Clear existing content
    carouselInner.innerHTML = '';
    carouselIndicators.innerHTML = '';

    // Generate carousel indicators
    activeSlides.forEach((slide, index) => {
        const indicator = document.createElement('li');
        indicator.setAttribute('data-target', '#myCarousel');
        indicator.setAttribute('data-slide-to', index.toString());
        if (index === 0) {
            indicator.className = 'active';
        }
        carouselIndicators.appendChild(indicator);
    });

    // Generate carousel items
    activeSlides.forEach((slide, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item' + (index === 0 ? ' active' : '');

        // Create image element
        const imgElement = slide.link
            ? `<a href="${slide.link}"><img src="${slide.image}" alt="Slide ${index + 1}"></a>`
            : `<img src="${slide.image}" alt="Slide ${index + 1}">`;

        // Create caption
        const titleElement = slide.link
            ? `<h2><a href="${slide.link}">${slide.title}</a></h2>`
            : `<h2>${slide.title}</h2>`;

        const subtitleElement = slide.customSubtitle
            ? `<p>${slide.customSubtitle}</p>`
            : `<p>${slide.subtitle}</p>`;

        item.innerHTML = `
            ${imgElement}
            <div class="carousel-caption">
                ${titleElement}
                ${subtitleElement}
            </div>
            <div class="carousel-caption-mobile">
                ${titleElement}
                ${subtitleElement}
            </div>
        `;

        carouselInner.appendChild(item);
    });
}

// Initialize carousel when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCarousel);
} else {
    renderCarousel();
}
