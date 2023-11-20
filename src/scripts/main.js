document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let aux = '';
      let numeromaximo = document.getElementById('numero-maximo').value;
      numeromaximo = parseInt(numeromaximo);
   
      if(numeromaximo%2 === 0){
        aux = numeromaximo + ' eh par';
        document.getElementById('resultado-valor').innerText = aux;
        
      }else{
        aux = numeromaximo + ' eh impar';
        document.getElementById('resultado-valor').innerText = aux;
     
      }
      
      document.querySelector('.resultado').style.display = 'block';
      
    })
})