myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  var oauthToken = '2982d7d8127f08e82653dba79ddcc92669cd96ae';
  var username = 'mohamedtwice';

  //Call to Github API to fetch user's profile info
  this.githubProfile = function() {

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username,
      headers: {
        'Authorization': 'token ' + oauthToken
      }
    }).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };

  //Call to Github API to fetch list of user's repos
  this.githubRepos = function() {

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos',
      headers: {
        'Authorization': 'token ' + oauthToken
      }
    }).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };
});
