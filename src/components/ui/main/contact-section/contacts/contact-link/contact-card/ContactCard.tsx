import ExternalLink from "../../../../../common/ExternalLink";
import ItemHeading from "../../../../../common/ItemHeading";
import styles from "./ContactCard.module.css";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  contact: {
    id: number;
    title: string;
    desription: string;
    href: string;
  };
};

const ContactCard = ({ contact }: Props) => {
  const { title, desription, href } = contact;

  return (
    <div className={styles.card_wrapper}>
      <ItemHeading>{title}</ItemHeading>
      <ExternalLink href={href}>
        <span>{desription}</span>
      </ExternalLink>
    </div>
  );
};

export default ContactCard;
