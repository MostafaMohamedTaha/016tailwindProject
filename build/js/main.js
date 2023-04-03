let initApp=()=>{
    hamburgerBtn=document.getElementById('hamburger-button')
    mobileMenu=document.getElementById('mobile-menu')
    let toggleMenu=()=>{
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }
    hamburgerBtn.addEventListener('click',toggleMenu)
    mobileMenu.addEventListener('click',toggleMenu)
}
document.addEventListener('DOMContentLoaded',initApp())