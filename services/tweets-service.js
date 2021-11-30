const dao = require('../tweets/tweet-dao');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        dao.findAllTweets()
            .then(tweets => res.json(tweets));
    }

    const findTweetById = (req, res) =>
        dao.findTweetById(req.params.id)
            .then(tweet => res.json(tweet));

    const postNewTweet = (req, res) => {
        const newTweet = {
            "topic": "Web Development",
            "userName": "Beyonce",
            "verified": false,
            "handle": "beyonce",
            "time": "2h",
            "avatar-image": "../../../images/bey.jpeg",
            "logo-image": "../../../images/bey.jpeg",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        dao.createTweet(newTweet)
            .then(tweet => res.json(tweet));
    }

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        // res.sendStatus(200);
        dao.updateTweet(req.params.id, req.body)
            .then((status) => res.send(status));
    }

    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));
    }
    app.get("/rest/tweets/:id", findTweetById);
    app.delete('/rest/tweets/:id', deleteTweet);
    app.put('/rest/tweets/:id/like', likeTweet);
    app.post('/rest/tweets', postNewTweet);
    app.get('/rest/tweets', findAllTweets);
};
