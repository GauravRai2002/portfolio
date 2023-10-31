const ham = document.getElementById('ham')
const listItem = document.querySelectorAll('.nav-menu-list-items-mobile')
const menu = document.getElementById('menu')

ham.addEventListener('click',()=>{
    menu.classList.contains('close')?open():close()
})

function open(){
    menu.classList.remove('close')
    menu.style.transform = 'translateX(0)'
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
}

function close(){
    menu.classList.add('close')
    menu.style.transform = 'translateX(-100%)'
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
}

listItem.forEach(element => {
    element.addEventListener('click',()=>{
        close()
    })
});


