$('document').ready(function() {
    const endpoint = 'https://api.github.com/users/mpasker/repos';
    const repos = [];

   $('button').click(function() {
       $.get(endpoint, function(data) {
           repos.push(...data);
           console.log(repos);
       });
   });
});
