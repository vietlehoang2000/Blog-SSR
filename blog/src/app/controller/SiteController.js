const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')


class SiteController {
    index(req, res,next) {
        //[GET] news
        Course.findWithDeleted({})
        .then(courses =>{
            courses= multipleMongooseToObject(courses); 
            res.render('home',{courses})})
        .catch(next);
    }
    //[GET] news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
