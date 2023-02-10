import { ContactItem } from '../ContactItem/ContactItem';
export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
