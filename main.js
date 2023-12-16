$(document).ready(function(){

   
        const endpoint = `https://api.github.com/users/marquinhos2017`;
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
       .catch(function(erro){
            alert("Ocorreu um erro ao buscar o usuario, tente novamente");
            const profile_avatar = document.querySelector('.profile-avatar');
            const profile_name = document.querySelector('.profile-name');
            const profile_username = document.querySelector('.profile-username');
            const followers_element = document.querySelector('#followers');
            const following_element = document.querySelector('#following');
            const public_repos_element = document.querySelector('#public_repos');
            const link = document.querySelector('.profile-link');

            profile_avatar.src = "https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-white-background-profile-107327860.jpg";
            profile_name.innerText ="Anonimo";
            
            profile_username.innerText = '@'+"aleatorio";

           followers_element.innerText = "X";
           following_element.innerText = "XX";
           public_repos_element.innerText = "XXX";
          
           link.href = "anonimo@gmail.com";
        })
        .finally(function(){
            setTimeout(function(){
                
            },1000);
        })
     
    
    
    
})



    

