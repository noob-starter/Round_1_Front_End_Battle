// Function to show options
function showOptions_1() {
    const optionsDiv = document.getElementById('options_1');
    optionsDiv.style.display = 'block';
}

// Function to hide options
let hideOptionsTimer_1;
function hideOptions_1() {
    hideOptionsTimer_1 = setTimeout(() => {
        const optionsDiv = document.getElementById('options_1');
        optionsDiv.style.display = 'none';
    }, 1000);
}

// Function to cancel the hide timer
function cancelHideOptions_1() {
    clearTimeout(hideOptionsTimer_1);
}



// Function to show options
function showOptions_2() {
    const optionsDiv = document.getElementById('options_2');
    optionsDiv.style.display = 'block';
}

// Function to hide options
let hideOptionsTimer_2;
function hideOptions_2() {
    hideOptionsTimer_2 = setTimeout(() => {
        const optionsDiv = document.getElementById('options_2');
        optionsDiv.style.display = 'none';
    }, 1000);
}

// Function to cancel the hide timer
function cancelHideOptions_2() {
    clearTimeout(hideOptionsTimer_2);
}


// add the images 

const images = ["./Images/image-1.webp", "./Images/image-2.webp", "./Images/image-3.webp", "./Images/image-4.webp"];
const imageElement = document.getElementById("display_img");
let currentIndex = 0;

function displayNextImage() {
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Display the first image immediately
displayNextImage();

// Schedule to display subsequent images every 2 seconds
setInterval(displayNextImage, 2000);
