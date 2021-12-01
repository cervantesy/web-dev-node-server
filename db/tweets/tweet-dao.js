const tweetModel = require('./tweet-model');

const findAllTweets = () =>
    tweetModel.find().sort({_id:-1});

const createTweet = (tweet) =>
    tweetModel.create(tweet);

const deleteTweet = (id) =>
    tweetModel.deleteOne({_id: id});

const updateTweet = (id, tweet) => {
    console.log("we updating tweet");
    // tweetModel.updateOne({_id: id},{$set: {liked: true}});
};

const findTweetById = (id) =>
    tweetModel.findById(id);

module.exports = {
    findAllTweets, createTweet, deleteTweet, updateTweet, findTweetById
};
