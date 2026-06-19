import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

const SectionSubHeading = ({ children, ...props }: Props) => {
  return (
    <span className={clsx("type_section_sub_heading_md", props.className)}>
      {children}
    </span>
  );
};

export default SectionSubHeading;
