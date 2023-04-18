//funzione div accedi
let button = document.getElementById('close');
let login = document.getElementById('areaprivata');
let areapersonale = document.getElementById('area');

button.onclick = function () {
  console.log('ciao');
  login.style.display = 'none';
}

areapersonale.onclick = function () {
  console.log('bravo');
  login.style.display = 'block';
}



//bottone di scroll up
let pallin = document.getElementById("pallino");



function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    pallin.style.display = "flex";
 

  } else{
    pallin.style.display = "none";
  }
}



window.onscroll = function () {
  scrollFunction()
};

// funzione che al click ti porta sopra
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



