const mobileBtn = document.getElementById('mobile-btn')
        nav = document.querySelector('nav')
        mobileBtnExit = document.getElementById('mobile-btn-exit')  

mobileBtn.addEventListener('click', () => {

    nav.classList.add('menu-btn')

})

mobileBtnExit.addEventListener('click', () => {

    nav.classList.remove('menu-btn')

})