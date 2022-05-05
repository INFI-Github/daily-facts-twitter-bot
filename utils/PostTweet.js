const client = require("./Client.js");

const postTweet = async(tweet) => {
    return new Promise((resolve, reject) => {
        client.post("statuses/update", {status: tweet}, (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        })
    })
}

module.exports = postTweet;

