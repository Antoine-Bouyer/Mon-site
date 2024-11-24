//Java pour Formulaire

let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Envoi du form detecté !')
})

let pseudo = document.querySelector('#pseudo')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let password2 = document.querySelector ('#password2')

if(pseudo.value.length<6){
    pseudo.classList.add('no-success');
    console.log("Le pseudo doit contenir au moins 6 caractères.");
} else {
    pseudo.classList.add('success')
}

if(email.value ==''){
    console.log("Veuillez mettre une adresse mail.")
    email.classList.add('no-success')
}else{
    email.classList.add('success')
}

if(password.value.length<8){
    password.classList.add('no-success');
    console.log("Le mot de passe doit contenir au moins 8 caractères.");
} else {
    password.classList.add('success');
}

if(password.value !== password2.value){
    console.log('mot de passe non identique')
    password.classList.add('no-success');
    password2.classList.add('no-success');
}else{
    console.log('mot de passe identique')
    password.classList.add('success');
    password2.classList.add('success');
}