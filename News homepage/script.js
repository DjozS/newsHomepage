const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const menuList = document.querySelector('ul')
menuBtn.addEventListener("click", function(){
    menuBtn.style.display = "none";
    closeBtn.style.display = "flex";
    menuList.style.display = "flex";
})
closeBtn.addEventListener("click", function(){
    menuBtn.style.display = "flex";
    closeBtn.style.display = "none";
    menuList.style.display = "none"
})