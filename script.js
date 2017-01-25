$('document').ready(function() {
    const endpoint = 'https://api.github.com/users/mpasker/repos';
    const repos = [];

   $('button').click(function() {
       $.get(endpoint, function(data) {
           repos.push(...data);
           console.log(repos);
           for(i in repos) {
               $('#myRepos').append(
                   `<li><a href="${repos[i].html_url}" target="_blank">
                    ${repos[i].name}</a></li>`
               );
           }
       })
   });
});
