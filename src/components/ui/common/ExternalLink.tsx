type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

const ExternalLink = ({ children, ...props }: Props) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      &#8226; {children} &#8226;
    </a>
  );
};

export default ExternalLink;
