import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import PropTypes from "prop-types";
import { deleteContact } from "../../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.mainWrapper}>
      <div className={css.textWrapper}>
        <div>
          {" "}
          <FaUser /> {contact.username}
        </div>
        <div>
          {" "}
          <FaPhone /> {contact.number}
        </div>
      </div>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
