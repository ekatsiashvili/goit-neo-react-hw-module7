import css from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={css.Contact}>
      <div className={css.Contact__info}>
        <div className={css.Contact__row}>{name}</div>
        <div className={css.Contact__row}>{number}</div>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
