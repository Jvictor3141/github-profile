
document.addEventListener('DOMContentLoaded', function() {
  const endpoint = `https://api.github.com/users/Jvictor3141`
  const name = document.querySelector('#name');
  const user = document.querySelector('#profile-username');
  const seguidores = document.querySelector('#seguidores');
  const seguindo = document.querySelector('#seguindo');
  const avaUrl = document.querySelector('#profile-avatar');
  const repos = document.querySelector('#repositorios');
  const link = document.querySelector('#profile-link');
  
  
  fetch(endpoint)
    .then(function(resposta) {
      return resposta.json();
    })
    .then(function(json) {
      name.innerText = json.name;
      user.innerText = json.login;
      seguidores.innerText = json.followers;
      seguindo.innerText = json.following;
      avaUrl.src = json.avatar_url;
      repos.innerText = json.public_repos;
      link.href = json.html_url;
    })

})