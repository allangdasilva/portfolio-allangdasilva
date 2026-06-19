import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const ItemHeading = ({ children, ...props }: Props) => {
  return <h3 className={clsx("type_title_md", props.className)}>{children}</h3>;
};

export default ItemHeading;
