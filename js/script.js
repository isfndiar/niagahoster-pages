// ketika naviigation di klikk
let boxContent = document.querySelector('.box-content');

const toggleBoxContent = document.querySelectorAll('#toggle');


toggleBoxContent.forEach((btn) => {
    btn.onclick = (e) => {
      boxContent.classList.toggle('active');
      e.preventDefault();
    };
  });


