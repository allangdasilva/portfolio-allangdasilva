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
      &#8226; {children} &#8226;
    </a>
  );
};

export default ExternalLink;
