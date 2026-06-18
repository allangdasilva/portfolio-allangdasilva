type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};

const Paragraph = ({ children, ...props }: Props) => {
  return <p {...props}>{children}</p>;
};

export default Paragraph;
