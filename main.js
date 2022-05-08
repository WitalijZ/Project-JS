const filterBox = document.querySelectorAll('.box');

document.querySelector('nav.choise').addEventListener('click', (event)=> {
    if (event.target.tagName !== "LI") return false;

    let filterClass = event.target.dataset['f'];
    console.log(filterClass);
});