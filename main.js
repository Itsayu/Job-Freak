let menu = document.querySelector('#menu-icon');
let sidenavbar = document.querySelector('.side-navbar');
let content = document.querySelector('.content');

menu.onclick = () => {
    sidenavbar.classList.toggle('active');
    content.classList.toggle('active');
};

function showContent(component) {
    var contentElement = document.getElementById('content');
    
    if (component === 'home') {
        contentElement.innerHTML = '<h1>Home</h1><p>Welcome to the home page!</p>';
    } 
    else if (component === 'contact') {
        contentElement.innerHTML = '<h1>Contact</h1><p>Contact information goes here.</p>';
    } 
    else if (component === 'information') {
        contentElement.innerHTML = '<h1>Information</h1><p>Additional information is displayed here.</p>';
    } 
    else if (component === 'guide') {
        contentElement.innerHTML = '<h1>Guide</h1><p>Helpful guide and instructions are shown in this section.</p>';
    }
}
