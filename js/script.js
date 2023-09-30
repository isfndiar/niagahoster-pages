// ketika naviigation di klikk



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


// ketika di klik content aside
let boxContent = document.querySelectorAll('.box-content');

for (let aside of boxContent) {
  aside.onclick =  function () {
    boxContent.forEach(element => {
      element.classList.remove('active')
    })
    aside.classList.add('active')
  }
}

const closeButton = document.querySelector('#closeBtn')

closeButton.onclick = function () {
  let boostContent = document.querySelector('#boostContent');
  boostContent.style.display = 'none';
  let gridBox = document.querySelectorAll('.grid-box');
  gridBox.style.gridTemplateColumns = '1fr 1fr 1fr'
}


