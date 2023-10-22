const Contact = require('../models/contactModel');

const getAllContactsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    let contacts;
    if (name) {
      // Buscar contactos que coincidan con el nombre
      contacts = await Contact.find({ 'name.first': name });
    } else {
      // Buscar todos los contactos
      contacts = await Contact.find();
    }

    res.json(contacts);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the contacts' });
  }
};

const getContactByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findById(id);

    if (!contact) {
      res.status(404).send('Contact Not Found');
    } else {
      res.json(contact);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while searching for the contact');
  }
};

const postContactHandler = async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const newContact = new Contact({
      name: name,
      email: email,
      phone: phone,
      address: address,
    });

    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while saving the contact' });
  }
};

const putContactHandler = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      {
        name: name,
        email: email,
        phone: phone,
        address: address,
      },
      { new: true },
    ); // Esta opción hace que la operación devuelva el documento modificado

    if (!updatedContact) {
      res.status(404).send('Contact Not Found');
    } else {
      res.json(updatedContact);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while updating the contact');
  }
};

const deleteContactHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedContact = await Contact.findByIdAndRemove(id);

    if (!deletedContact) {
      res.status(404).send('Contact Not Found');
    } else {
      res.json({ message: 'Contact successfully deleted' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while deleting the contact');
  }
};

module.exports = {
  getAllContactsHandler,
  getContactByIdHandler,
  postContactHandler,
  putContactHandler,
  deleteContactHandler,
};
