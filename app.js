const cta = document.getElementById('cta');
const body = document.body;

cta.addEventListener('click', cambiarModo)

function cambiarModo(){
    if (body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode');
    }else{
        body.classList.add(('dark-mode'))
    }
}