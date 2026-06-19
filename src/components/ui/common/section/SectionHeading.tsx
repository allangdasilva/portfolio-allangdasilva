import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const SectionHeading = ({ children, ...props }: Props) => {
  return (
    <h2 className={clsx("type_section_heading_md", props.className)}>
      {children}
    </h2>
  );
};

export default SectionHeading;
