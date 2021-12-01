const whoModel = require('./who-model');

const findAllTweets = () =>
    whoModel.find();

module.exports = {findAllTweets};