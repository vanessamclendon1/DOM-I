const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//selectors for Navigation
const aTag = document.querySelectorAll('a');
aTag[0].setAttribute('a', '.nav-item-1');
aTag[0].innerText = "Service";

aTag[1].setAttribute('a', 'nav-item-2');
aTag[1].innerText ="Product";

aTag[2].setAttribute('a','nav-item-3');
aTag[2].innerText = 'Vision';

aTag[3].setAttribute('a', 'nav-item-4');
aTag[3].innerText = 'Features';

aTag[4].setAttribute('a', 'nav-item-5');
aTag[4].innerText = 'About';

aTag[5].setAttribute('a','nav-item-6');
aTag[5].innerText ='Contact';

//used forEach to make navs
aTag.forEach(link => link.style.color ='green');

 //add two nav items
const newATags = document.createElement('a');
const mainNavs = document.querySelector('nav');
newATags.innerText = 'Reviews';
newATags.href = '#';
mainNavs.prepend(newATags);
newATags.style.color = 'green';

 const newATago = document.createElement('a');
const mainNav1 = document.querySelector('nav');
newATago.innerText = 'Info';
newATago.href = '#';
mainNav1.append(newATago);
newATago.style.color = 'green';


//cta section
const newH1Tag = document.querySelector('h1');
newH1Tag.innerHTML = `DOM <br> Is <br> Awesome`;


//cta button
const btnCta = document.querySelector('button');
btnCta.innerText = "Get Started";

//cta image 
const imgCta = document.querySelector('#cta-img');
imgCta.src = "img/header-img.png";
imgCta.alt = "Image of a code snippet.";

//main-content 
const mainContent = document.querySelectorAll('.text-content');
/**top of main content  */
mainContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
mainContent[0].querySelector('p').textContent = siteContent['main-content']['features-content'];

mainContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
mainContent[1].querySelector('p').textContent = siteContent['main-content']['about-content'];

//Middle Image in Main Content 
const imgMiddle = document.querySelector('#middle-img');
imgMiddle.src = "img/mid-page-accent.jpg";
imgMiddle.alt = "Image of code snippets across the screen";

//bottom main-content 
mainContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
mainContent[2].querySelector('p').textContent = siteContent['main-content']['services-content'];

mainContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
mainContent[3].querySelector('p').textContent = siteContent['main-content']['product-content'];
mainContent[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
mainContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content'];

//contact
const lastContact = document.querySelector('.contact');
lastContact.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4']
lastContact.getElementsByTagName('p')[0].textContent = siteContent['contact']['address']

lastContact.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone']
lastContact.getElementsByTagName('p')[2].textContent = siteContent['contact']['email']


//footer
const footerText = document.querySelector('footer');
footerText.innerText = "Copyright Great Idea! 2018";



