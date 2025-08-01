// --------MENU-BURGER---------
const burgerMenu = document.querySelector('.burger-icon');
const navMenu = document.querySelector('.nav-list');

burgerMenu.addEventListener('click', () => {
  const visibility = navMenu.getAttribute('data-visible')
  if (visibility === 'false') {
    navMenu.setAttribute('data-visible', true);
    burgerMenu.setAttribute('aria-expanded', true)
  } else {
    navMenu.setAttribute('data-visible', false);
    burgerMenu.setAttribute('aria-expanded', false)
  }
});
// --------TIMER---------

const deadline = new Date('2026-08-01T00:00:00').getTime();
console.log(deadline);

function updateTimer(){
  const now = new Date().getTime();
  const diff = deadline - now;

if(diff <= 0){
  document.getElementById('days').textContent = '00d';
  document.getElementById('hours').textContent = '00h';
  document.getElementById('minutes').textContent = '00m';
  document.getElementById('seconds').textContent = '00s';
  clearInterval(timerInterval);
  return
}
const days = Math.floor(diff / (1000 * 60 * 60 * 24 ));
const hours = Math.floor((diff / (1000 * 60 * 60 )) % 24);
const minutes = Math.floor((diff / (1000 * 60 )) % 60);
const seconds = Math.floor((diff / (1000 )) % 60);


document.getElementById('days').textContent = String(days).padStart(2, '0') + 'd';
document.getElementById('hours').textContent = String(hours).padStart(2, '0') + 'h';
document.getElementById('minutes').textContent = String(minutes).padStart(2, '0') + 'm';
document.getElementById('seconds').textContent = String(seconds).padStart(2, '0') + 's';

}
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();