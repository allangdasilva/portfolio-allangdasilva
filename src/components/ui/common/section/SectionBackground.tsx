import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const SectionBackground = ({ children, ...props }: Props) => {
  return (
    <div
      className={clsx("section_background_wrapper", props.className)}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

export default SectionBackground;
