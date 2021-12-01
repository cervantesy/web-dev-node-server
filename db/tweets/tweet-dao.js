const tweetModel = require('./tweet-model');

const findAllTweets = () =>
    tweetModel.find().sort({_id:-1});

const createTweet = (tweet) =>
    tweetModel.create(tweet);

const deleteTweet = (id) =>
    tweetModel.deleteOne({_id: id});

const updateTweet = (id, tweet) => {
    console.log("current tweet");
    console.log(tweet);
    if (tweet.liked) {
        tweetModel.updateOne({_id: id},{$set: {liked: false}}).then(res => console.log(res));
        tweetModel.updateOne({_id: id},{$inc: {"stats.likes": -1}}).then(res => console.log(res));
    } else {
        tweetModel.updateOne({_id: id},{$set: {liked: true}}).then(res => console.log(res));
        tweetModel.updateOne({_id: id},{$inc: {"stats.likes": 1}}).then(res => console.log(res));
    }

};

const findTweetById = (id) =>
    tweetModel.findById(id);

module.exports = {
    findAllTweets, createTweet, deleteTweet, updateTweet, findTweetById
};
