'use strict';
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const bthOpenModal = document.querySelectorAll('.show-modal')

const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal =  function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


console.log(bthOpenModal);
for(let i = 0;i<bthOpenModal.length;i++) {
    bthOpenModal[i].addEventListener('click',openModal)
}

btnCloseModal.addEventListener('click',closeModal)

overlay.addEventListener('click',closeModal)

document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key === 'Escape')
    {
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})