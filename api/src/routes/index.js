const { Router } = require('express');
const contactsRouter = require('./contactsRouter');

const mainRouter = Router();

mainRouter.use('/contact', contactsRouter);

module.exports = mainRouter;
