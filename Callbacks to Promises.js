//callback approach
DBCall(3, function (user) {
  console.log(`User: ${user}`);
  getRepos(user.name, function (repos) {  
    console.log("Repos", repos);
  });
});

//promise approach
DBCall(3)
  .then(res => getRepos(res.name))
  .then(res => console.log(res[0]))
  .catch(err => console.log(err.message));

function DBCall(id) {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log("DB request...");
      resolve({ id: id, name: "KTM" });
    }, 2000);
  });
}

function getRepos(userName) {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log("DB request for repos...");
        resolve(["repo 1", "repo 2", "repo 3"]);
      }, 2000);
  });
}
