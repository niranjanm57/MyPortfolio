const words = ["Computer Engineer", "Web Developer", "Java Developer"];
let wordIndex = 0;

function changeWord() {
    const wordElement = document.querySelector('.txt-an span');
    wordElement.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-cont");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
document.addEventListener('DOMContentLoaded', () => {
    function toggleDescription(event) {
        const targetId = event.currentTarget.getAttribute('data-target');
        const descriptions = document.querySelectorAll('.work-description');
        const titles = document.querySelectorAll('.project-title');

        // Hide all descriptions and reset title underlines
        descriptions.forEach(desc => desc.classList.remove('active'));
        titles.forEach(title => title.classList.remove('active'));

        // Show the clicked description and underline the title
        document.getElementById(targetId).classList.add('active');
        event.currentTarget.classList.add('active');
    }

    // Attach click event listeners to project titles
    document.querySelectorAll('.project-title').forEach(title => {
        title.addEventListener('click', toggleDescription);
    });
});
function toggleMenu() {
    var menu = document.querySelector('.mobile-nav');
    menu.classList.toggle('active');
}
var sidemeu = document.getElementById("sidemenu");

function openmenu(){

sidemeu.style.right = "0";

}

function closemenu(){

sidemeu.style.right = "-200px";}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[name="submit-to-google-sheet"]');
    const messageSpan = document.getElementById('msg');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbweLQ2pEmD4H03bGZCUY2KXGitx0ZAsuym_eBqMePP3HOefu9ky6zKIyi-bo5jwQaOS0Q/exec', { // Replace with your Web App URL
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            console.log(result); // Log response if needed
            messageSpan.style.display = 'block'; // Show success message
            setTimeout(() => messageSpan.style.display = 'none', 5000); // Hide after 5 seconds
            form.reset(); // Reset form fields
        })
        .catch(error => console.error('Error:', error));
    });
});





// Change the word every 1.5 seconds 
setInterval(changeWord, 1500);

// Initialize the first word
changeWord();
