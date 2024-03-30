import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div className={css.wrapper}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}

      {visibleContacts.length === 0 ? <p>List is empty</p> : ""}
    </div>
  );
};

export default ContactList;
