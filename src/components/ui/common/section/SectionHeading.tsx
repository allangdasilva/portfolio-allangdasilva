type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const SectionHeading = ({ children, ...props }: Props) => {
  return <h2 {...props}>{children}</h2>;
};

export default SectionHeading;
