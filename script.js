let navcard=document.querySelector('.navcard');
let hamburger=document.querySelector('#hamburger');
let close=document.querySelector('#close');
hamburger.addEventListener('click',()=>
{
    navcard.classList.add('show');
});
close.addEventListener('click',()=>{
    navcard.classList.remove('show');
})