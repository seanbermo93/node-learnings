
//JavaScript Promises -- 

// Option 2 - Promises
   /* getUser(1)
    .then(user => getRepositories(user.name))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log('Error '+err));*/

//Option 3 - Async, Await
 testAsyncAwait();

async function testAsyncAwait(){
    const use = await getUser(11);
    const repos = await getRepositories(use.name);
    const comits = await getCommits(repos[0]);
    console.log('comits');
}

    function getUser(uId){
        return new Promise((resolve, reject)=>{
            console.log('Fetching a user from the DB');
            setTimeout(() => {
                resolve({id: uId, name: 'githubAddress'});
            }, 3000);
        });
    }

    function getRepositories(username){
        console.log('Getting their repos '+username);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(['repo1', 'repo2', 'repo3']);
            }, 2000);
        });
    }

    function getCommits(repo){
        console.log('Getting their commits ');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(['commit 1', 'commit 2', 'commit 3']);
            }, 2000);
        });
    }