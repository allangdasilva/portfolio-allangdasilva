import { contactsCopy } from "../../../../../../data/contacts.copy";
import ContactCard from "./contact-card/ContactCard";
import styles from "./ContactLinks.module.css";

const ContactLink = () => {
  return (
    <div className={styles.cards_wrapper}>
      {contactsCopy.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactLink;
