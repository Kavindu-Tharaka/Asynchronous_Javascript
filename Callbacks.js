console.log("Before");

DBCall(3, function (user) {
  // console.log("User", user);  //User { id: 3, name: 'KTM' }
  console.log(`User: ${user}`); //User: [object Object]

  getRepos(user.name, function (repos) {
    console.log("Repos", repos);
  });
});

console.log("After");

function DBCall(id, callback) {
  setTimeout(() => {
    console.log("DB request...");
    callback({ id: id, name: "KTM" });
  }, 2000);
}

function getRepos(userName, callback) {
  setTimeout(() => {
    console.log("DB request for repos...");
    callback(["repo 1", "repo 2", "repo 3"]);
  }, 2000);
}
