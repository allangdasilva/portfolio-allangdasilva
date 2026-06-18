type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const ItemHeading = ({ children, ...props }: Props) => {
  return <h3 {...props}>{children}</h3>;
};

export default ItemHeading;
