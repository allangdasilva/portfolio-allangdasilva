import ContactLink from "./contact-link/ContactLinks";
import ContactSocial from "./contact-social/ContactSocial";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contacts_wrapper}>
      <ContactLink />
      <ContactSocial />
    </div>
  );
};

export default Contacts;
