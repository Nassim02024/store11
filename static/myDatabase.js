window.onload = function () {
    alert('هذه الصفحة خاصة فقط با الادمن')
    let verev = document.querySelector('.neu-button')
verev.onclick = function () {
    
    let passe = document.querySelector('.passe')
    let castemer = document.querySelector('.castemer')
    let modpasse = document.querySelector('.modpasse')
    let wrong = document.querySelector('.modpasse p')
    if (passe.value == 'nassim..1234..1234') {
        castemer.style.display = 'block'
        modpasse.style.display = 'none'
        document.body.style.backgroundImage = 'none'
    }
    else{
        passe.value = ""
        wrong.style.display = 'block'
        

    }
}
   
}