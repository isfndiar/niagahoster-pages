// ketika naviigation di klikk
let boxContent = document.querySelector('.box-content');

const toggleBoxContent = document.querySelectorAll('#toggle');


toggleBoxContent.forEach((btn) => {
    btn.onclick = (e) => {
      boxContent.classList.toggle('active');
      e.preventDefault();
    };
  });

// hambureger menu ketika diklik
const navbarNav = document.querySelector('.navbar-nav');
const hb = document.querySelector('#hamburger-menu')

document.querySelector('.hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
}


document.addEventListener('click', function (e) {
  if (!navbarNav.contains(e.target) && !hb.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!aside.contains(e.target) && !ub.contains(e.target)) {
    aside.classList.remove('active');
  }


})


const aside = document.querySelector('.aside')
const ub =  document.querySelector('.user-btn')

document.querySelector('.user-btn').onclick = (e) => {
  aside.classList.toggle('active');
  e.preventDefault();
}