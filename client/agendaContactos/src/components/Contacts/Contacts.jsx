const Contact = ({ contact }) => {
  return (
    <div>
      <h3>
        {contact.name.first} {contact.name.last}
      </h3>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <p>
        {contact.address.street}, {contact.address.city},{' '}
        {contact.address.state}
      </p>
    </div>
  );
};

export default Contact;
