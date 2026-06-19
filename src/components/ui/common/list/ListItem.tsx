type Props = React.LiHTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode;
};

const ListItem = ({ children }: Props) => {
  return <li>{children}</li>;
};

export default ListItem;
