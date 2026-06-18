type Props = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

const SectionSubHeading = ({ children, ...props }: Props) => {
  return <span {...props}>{children}</span>;
};

export default SectionSubHeading;
