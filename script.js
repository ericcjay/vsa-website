let slideIndex = 0; // Start from the first image

// Function to move the slide
function moveSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Update slideIndex based on the button click
  slideIndex += n;

  // loop back to the first slide
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  // If we go before the first slide, go to the last slide
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  // Change the slide position using CSS transform property
  document.querySelector('.slider').style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Automatic slide change every 3 seconds
// setInterval(() => moveSlide(1), 3000); // Move to the next slide every 3 seconds

function loadGoogleCalendarAPI() {
    gapi.client.init({
        apiKey: API_KEY,
    }).then(function() {
        fetchUpcomingEvents();
    }).catch(function(error) {
        console.error("Error initializing Google API:", error);
    });
}

function handleClientLoad() {
    gapi.load('client', loadGoogleCalendarAPI);
}

// Array to hold image data (image source and description)
const images = [
    { src: 'images/gallery/old1.jpg'},
    { src: 'images/gallery/old3.jpg'},
    { src: 'images/gallery/old4.jpg'},
    { src: 'images/gallery/old6.jpg'},
    { src: 'images/gallery/old7.jpg'},
    { src: 'images/gallery/old8.jpg'},
    { src: 'images/gallery/old9.jpg'},
    { src: 'images/gallery/old10.jpg'},
    { src: 'images/gallery/old11.jpg'},
    { src: 'images/gallery/old13.jpg'},
    { src: 'images/gallery/old14.jpg'},
    { src: 'images/gallery/old15.jpg'},
    { src: 'images/gallery/old17.jpg'},
    { src: 'images/gallery/old18.jpg'},
    { src: 'images/gallery/misc1.jpg'},
    { src: 'images/gallery/misc8.jpg'},
    { src: 'images/gallery/misc9.jpg'},
    { src: 'images/gallery/misc10.jpg'},
    { src: 'images/gallery/misc11.jpg'},
    { src: 'images/gallery/misc12.jpg'},
    { src: 'images/gallery/misc13.jpg'},
    { src: 'images/gallery/misc14.jpg'},
    { src: 'images/gallery/misc15.jpg'},
    { src: 'images/gallery/misc20.jpg'},
    { src: 'images/gallery/misc21.jpg'},
    { src: 'images/gallery/misc22.jpg'},
    { src: 'images/gallery/ace1.jpg'},
    { src: 'images/gallery/ace2.jpg'},
    { src: 'images/gallery/ace3.jpg'},
    { src: 'images/gallery/ace4.jpg'},
    { src: 'images/gallery/ace7.jpg'},
    { src: 'images/gallery/ace8.jpg'},



    // Add more images if needed but also do not because it will lag :(
    // Also GitHub can only upload 100 mb so I deleted some pictures from the gallery
];

// Function to load images dynamically into the gallery
function loadGalleryImages() {
    const galleryGrid = document.getElementById('gallery-grid');

    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        // Create the image element
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        // Add click event to open the modal
        img.onclick = () => openModal(image.src, image.description);

        // Create the description element
        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = image.description;

        // Append image and description to the gallery item
        galleryItem.appendChild(img);
        galleryItem.appendChild(description);

        // Append the gallery item to the gallery grid
        galleryGrid.appendChild(galleryItem);
    });
}

// Function to open the modal with the clicked image and description
function openModal(imageSrc, imageDescription) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalDescription.textContent = imageDescription;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Add event listener for the close button
//document.querySelector('.close').addEventListener('click', closeModal);

// Call the function to load the images when the page loads
window.onload = loadGalleryImages;
