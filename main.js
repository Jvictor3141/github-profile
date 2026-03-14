
document.addEventListener('DOMContentLoaded', function() {
  const endpoint = `https://api.github.com/users/Jvictor3141`;
  const name = document.getElementById('name');
  const user = document.getElementById('profile-username');
  const seguidores = document.getElementById('seguidores');
  const seguindo = document.getElementById('seguindo');
  const avaUrl = document.getElementById('profile-avatar');
  const repos = document.getElementById('repositorios');
  const link = document.getElementById('profile-link');
  
  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      name.textContent = json.name;
      user.textContent = json.login;
      seguidores.textContent = json.followers;
      seguindo.textContent = json.following;
      avaUrl.src = json.avatar_url;
      repos.textContent = json.public_repos;
      link.href = json.html_url;
    })
    .catch(function(erro) {
      alert('Ocorreu um erro ao buscar o endereço. Por favor, tente novamente.');
      console.error('Erro:', erro);
    });
});