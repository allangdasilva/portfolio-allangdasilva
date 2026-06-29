import clsx from "clsx";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  sectionCopy: {
    title: React.JSX.Element;
    sub_title: React.JSX.Element;
    description: React.JSX.Element;
  };
};

const SectionSummary = ({ sectionCopy, ...props }: Props) => {
  const { title, sub_title, description } = sectionCopy;

  return (
    <div className={clsx("section_summary_center", props.className)}>
      <SectionSubHeading>{sub_title}</SectionSubHeading>
      <SectionHeading>{title}</SectionHeading>
      <>{description}</>
    </div>
  );
};

export default SectionSummary;
