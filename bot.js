const T = require("./config/keys");
const track = require("./config/track");
const bannedUsers = require("./config/users");

const stream = T.stream("statuses/filter", { track });
console.log("Bot is starting");

stream.on("tweet", tweet => {
    for (let i = 0; i < bannedUsers.length; i++) {
        if (tweet.user.screen_name === bannedUsers[i])
            return console.log("Tweet from banned user '@" + bannedUser[i] + "' ignored");
    }
    T.post("statuses/retweet/:id", { id: tweet.id_str }, (err, data, response) => {
        console.log("Retweeted");
    });
});