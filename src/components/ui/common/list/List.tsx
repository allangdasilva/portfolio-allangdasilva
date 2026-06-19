type Props = React.HTMLAttributes<HTMLUListElement> & {
  children: React.ReactNode;
};

const List = ({ children }: Props) => {
  return <ul>{children}</ul>;
};

export default List;
