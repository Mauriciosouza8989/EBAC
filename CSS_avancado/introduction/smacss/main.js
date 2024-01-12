const acordeons = document.querySelectorAll('.acordeon-header')
for (let i = 0; i < acordeons.length; i++){
    acordeons[i].addEventListener('click',(event) =>{
        event.currentTarget.parentNode.classList.toggle('is-open')
    })

}