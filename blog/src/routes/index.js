const express = require('express');

const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./course')
const meRouter = require('./me')

function route(app) {


    app.use('/news', newsRouter);

    app.use('/courses', coursesRouter);

    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route;
