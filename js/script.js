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


// document.addEventListener('click', function (e) {
//   if(hb.contains(e.target)) {
//     navbarNav.classList.toggle('active')
//   }
// })
