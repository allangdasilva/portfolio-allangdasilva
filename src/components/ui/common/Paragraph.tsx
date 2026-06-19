import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};

const Paragraph = ({ children, ...props }: Props) => {
  return (
    <p className={clsx("type_paragraph_md", props.className)}>{children}</p>
  );
};

export default Paragraph;
