const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelectorAll('.button');
const closeBtn = document.querySelector('.modal-close');
const body = document.querySelector('body');

buttonModal.forEach(item => {
    item.addEventListener('click', (event) => {
        modalWindow.style.display = 'flex';
        body.classList.add('no-scroll');
    });
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal-inner');

    if(!isModal) {
        modalWindow.style.display = 'none';
        body.classList.remove('no-scroll');
    }
});

closeBtn.addEventListener('click', (e) => {
    modalWindow.style.display = 'none';
});