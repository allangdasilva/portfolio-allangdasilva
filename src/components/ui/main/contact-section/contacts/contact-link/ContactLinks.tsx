import { motion, type HTMLMotionProps } from "motion/react";
import { contactsCopy } from "../../../../../../data/contacts.copy";
import ContactCard from "./contact-card/ContactCard";
import styles from "./ContactLinks.module.css";

type Props = HTMLMotionProps<"div">;

const ContactLink = ({ ...props }: Props) => {
  return (
    <motion.div {...props} className={styles.links_wrapper}>
      {contactsCopy.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </motion.div>
  );
};

export default ContactLink;
