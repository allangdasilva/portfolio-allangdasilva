import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { contactsSocialCopy } from "../../../../../../data/contacts.copy";
import List from "../../../../common/list/List";
import ListItem from "../../../../common/list/ListItem";
import styles from "./ContactSocial.module.css";

type Props = HTMLMotionProps<"div">;

const ContactSocial = ({ ...props }: Props) => {
  const cardVariants: Variants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div className={styles.social_wrapper} {...props}>
      <List>
        {contactsSocialCopy.map((social) => (
          <ListItem key={social.id}>
            <motion.div variants={cardVariants}>
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.svg}
              </motion.a>
            </motion.div>
          </ListItem>
        ))}
      </List>
    </motion.div>
  );
};

export default ContactSocial;
