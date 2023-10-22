const { Router } = require('express');
const {
  getAllContactsHandler,
  getContactByIdHandler,
  postContactHandler,
  putContactHandler,
  deleteContactHandler,
} = require('../handlers/contactsHandler');
const postContactValidate = require('../middlewares/postContactValidate');

const contactsRouter = Router();

contactsRouter.get('/', getAllContactsHandler);

contactsRouter.get('/:id', getContactByIdHandler);

contactsRouter.post('/', postContactValidate, postContactHandler);

contactsRouter.put('/:id', putContactHandler);

contactsRouter.delete('/:id', deleteContactHandler);

module.exports = contactsRouter;
