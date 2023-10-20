const sections = document.querySelectorAll('.section');

const handleScroll = () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    console.log(sectionHeight)
    if (window.scrollY >= sectionTop - sectionHeight / 2) {
      section.classList.add('active'); 
    } else {
      section.classList.remove('active');
    }
  });
};

document.addEventListener('scroll', handleScroll);


const scrollButton = document.getElementById('pageDown');
const scrolltoTopButton = document.getElementById('pageUp');
const secondContainer = document.getElementById('secondcontainer');
const firstContainer = document.getElementById('firstcontainer');

scrollButton.addEventListener('click', scrollToSecondContainer);
scrolltoTopButton.addEventListener('click',scrollToTop);


function scrollToSecondContainer() {
  secondContainer.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop(){
  firstContainer.scrollIntoView({ behavior: 'smooth'});
}

