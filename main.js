
$(document).ready(function() {
  const endpoint = `https://api.github.com/users/Jvictor3141`;
  const name = $('#name');
  const user = $('#profile-username');
  const seguidores = $('#seguidores');
  const seguindo = $('#seguindo');
  const avaUrl = $('#profile-avatar');
  const repos = $('#repositorios');
  const link = $('#profile-link');
  
  
  $.getJSON(endpoint, function(json) {
    name.text(json.name);
    user.text(json.login);
    seguidores.text(json.followers);
    seguindo.text(json.following);
    avaUrl.attr('src', json.avatar_url);
    repos.text(json.public_repos);
    link.attr('href', json.html_url);
  });
});