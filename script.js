
// JavaScript to handle the search click event
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.trim();

        if (query) {
            // Redirect to a new tab or specific URL based on the search query
            window.location.href = `https://www.example.com/search?q=${encodeURIComponent(query)}`;
            // Or, if you want to switch tabs in the same page:
            // window.location.href = `#${encodeURIComponent(query)}`;
        } else {
            alert("Please enter a search term.");
        }
    });
});


let images = ["image1.png", "image2.png", "image3.png"]; // Replace with actual image paths
let currentIndex = 0;
const imgElement = document.getElementById("slider-image");
let autoSlideInterval;

// Function to change slide
function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Preload next image
    let nextImage = new Image();
    nextImage.src = images[currentIndex];

    // Apply fade effect
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = nextImage.src; // Use preloaded image
        imgElement.style.opacity = 1;
    }, 300);

    // Reset auto-slide timer when user manually changes the slide
    resetAutoSlide();
}

// Function to start automatic slide transition every 5 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1); // Move to the next image automatically
    }, 5000);
}

// Function to reset auto-slide timer when user interacts
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Stop previous interval
    startAutoSlide(); // Restart auto-slide
}

// Add event listeners **only once** (outside function)
document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
document.querySelector(".next").addEventListener("click", () => changeSlide(1));

// Start the auto-slide when the page loads
startAutoSlide();



function showForm(formId) {
    // Hide both forms first
    document.getElementById("book-visit").style.display = "none";
    document.getElementById("request-brochure").style.display = "none";

    // Show the selected form
    document.getElementById(formId).style.display = "block";
}
function formsubmmisiona() {
    const adminEmail = "swan@ascareservices.co.uk";

    document.addEventListener("DOMContentLoaded", function () {
        // Select all forms inside book-visit and request-brochure
        const forms = document.querySelectorAll("#book-visit form, #request-brochure form");

        forms.forEach((form) => {
            form.addEventListener("submit", function (event) {
                event.preventDefault();

                const inputs = form.querySelectorAll("input[required], textarea[required]");
                let allFilled = true;

                inputs.forEach((input) => {
                    if (!input.value.trim()) {
                        allFilled = false;
                        input.style.border = "2px solid red";
                    } else {
                        input.style.border = "";
                    }
                });

                if (!allFilled) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Please fill all required fields!"
                    });
                    return;
                }

                // Set the FormSubmit action
                form.action = `https://formsubmit.co/${adminEmail}`;
                form.method = "POST";
                form.submit();

                Swal.fire({
                    icon: "success",
                    title: "Thank You!",
                    text: "Your form has been submitted successfully.",
                    confirmButtonText: "OK"
                }).then(() => {
                    form.reset();
                });
            });
        });
    });
}

formsubmmisiona();
document.getElementById('menuIcon').addEventListener('click', function () {
    document.getElementById('navMenu').classList.toggle('active');
});

