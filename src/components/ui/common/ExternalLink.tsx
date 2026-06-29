import clsx from "clsx";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

const ExternalLink = ({ children, ...props }: Props) => {
  return (
    <a
      className={clsx("type_link_md", props.className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
