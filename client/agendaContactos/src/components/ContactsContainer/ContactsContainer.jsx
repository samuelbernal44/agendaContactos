import Contact from '../Contacts/Contacts';

const ContactsContainer = ({ data }) => {
  // Agrupar los datos por la primera letra del apellido
  const groupedData = data.reduce((groups, contact) => {
    const firstLetter = contact.name.last[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(contact);
    return groups;
  }, {});

  return (
    <div>
      {Object.entries(groupedData)
        .sort()
        .map(([letter, contacts]) => (
          <div key={letter}>
            <h2>{letter}</h2>
            {contacts.map((contact) => (
              <Contact key={contact._id} contact={contact} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default ContactsContainer;
