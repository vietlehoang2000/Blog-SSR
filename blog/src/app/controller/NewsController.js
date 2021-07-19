class NewsController {
    index(req, res) {
        //[GET] news
        res.render('news');
    }

    //[GET] news/:slug
    show(req, res) {
        res.send('testshow');
    }
}

module.exports = new NewsController();
