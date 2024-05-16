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
