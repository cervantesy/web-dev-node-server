const dao = require('../tweets/tweet-dao');

module.exports = (app) => {
    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(posts => res.json(posts));

    app.get('/rest/tweets', findAllTweets);
};
