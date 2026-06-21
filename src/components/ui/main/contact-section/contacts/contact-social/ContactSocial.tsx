import { contactsSocialCopy } from "../../../../../../data/contacts.copy";
import List from "../../../../common/list/List";
import ListItem from "../../../../common/list/ListItem";
import styles from "./ContactSocial.module.css";

const ContactSocial = () => {
  return (
    <div className={styles.social_wrapper}>
      <List>
        {contactsSocialCopy.map((social) => (
          <ListItem key={social.id}>
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              {social.svg}
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ContactSocial;
