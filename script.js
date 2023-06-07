const lirePlusButton = document.querySelector('.lirePlus');
const extrait = document.querySelector('.extrait');
const textComplet = document.querySelector('.textComplet');

lirePlusButton.addEventListener('click', function () {
    textComplet.style.display = 'block';
    lirePlusButton.style.display = 'none';
});

