var button = document.querySelector('button');
var mainMenu = document.getElementById('main-menu');

function open(){
    mainMenu.classList.add('show-menu')
    button.setAttribute('aria-expanded', true)
}

function close(){
    mainMenu.classList.remove('show-menu')
    button.setAttribute('aria-expanded', false)
    button.focus()
}

button.onclick = function(e){
    if (mainMenu.classList.contains('show-menu')){
        close()
    } else{
        open()
    }
}

document.onclick = function(e){
    if (mainMenu.contains(e.target) || e.target === button){
        return
    }
    close()   
}

document.onkeyup = function(e){
    if (e.key === 'Tab' && mainMenu.classList.contains('show-menu')){
        button.focus()
    }
    else if (e.key === 'Escape'){
        close()
    }
}