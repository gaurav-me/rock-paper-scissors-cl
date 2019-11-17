const readline = require("readline");

class Query {
  makeQuery(query) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise(resolve =>
      rl.question(query, ans=> {
        rl.close();
        resolve(ans);
      })
    );
  }
}

module.exports = Query;
