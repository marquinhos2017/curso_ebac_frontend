/*document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn-buscar-cep').addEventListener('click',function(){
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();

    })
})
*/



$(document).ready(function(){


        const endpoint = `https://api.github.com/users/marquinhos2017`;

        /*$.ajax(endpoint).done(function(resposta){
            console.log(resposta);
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro}, ${cidade}, ${estado}`;
            $('#endereco').val(endereco);

            setTimeout(function(){
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            },4000);

            

        })
        */
       fetch(endpoint)
        .then(function(resposta){
            return resposta.json();
       }).then(function(json){
            console.log(json);
            const profile_avatar = document.querySelector('.profile-avatar');
            const profile_name = document.querySelector('.profile-name');
            const profile_username = document.querySelector('.profile-username');
            const followers_element = document.querySelector('#followers');
            const following_element = document.querySelector('#following');
            const public_repos_element = document.querySelector('#public_repos');
            const link = document.querySelector('.profile-link');

            profile_avatar.src = `${json.avatar_url}`;
            profile_name.innerText = json.name;
            
            profile_username.innerText = '@'+json.login;

           followers_element.innerText = json.followers;
           following_element.innerText = json.following;
           public_repos_element.innerText = json.public_repos;
          
           link.href = `${json.html_url}`;
           

            
       })
      
    

    $('#formulario-pedido').submit(function(evento){
        evento.preventDefault();
        if($('#nome').val().length == 0){
            throw new Error('Digite o nome');
        }
    })
})

