function DBCall(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("DB request...");
      resolve({ id: id, name: "KTM" });
    }, 2000);
  });
}

function getRepos(userName) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("DB request for repos...");
      resolve(["repo 1", "repo 2", "repo 3"]);
    }, 2000);
  });
}

async function getRepositories() {
  try {
    const user = await DBCall(1);
    const repos = await getRepos(user.name);
    console.log(repos);
  } catch (err) {
    console.log(err);
  }
}

getRepositories();
