const form = document.getElementById('form_deposito');
const numero_a = document.getElementById('a');
const numero_b = document.getElementById('b');
let formEValido = false;

function validaNome(a,b){
    return b > a;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    

    formEValido = validaNome(numero_a.value,numero_b.value);
    if(formEValido){
        const containerMesageSucess = document.querySelector('.message-sucess');
        containerMesageSucess.innerHTML =`Numero B: ${numero_b.value} eh maior que Numero A: ${numero_a.value}`;
        containerMesageSucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        numero_a.value = '';
        numero_b.value = '';
    }else{
        const containererrormessage = document.querySelector('.error-message');
        containererrormessage.innerHTML =`Numero B: ${numero_b.value} eh menor que Numero A: ${numero_a.value}`;
        containererrormessage.style.display = 'block';
        document.querySelector('.message-sucess').style.display = 'none';

    }
})

