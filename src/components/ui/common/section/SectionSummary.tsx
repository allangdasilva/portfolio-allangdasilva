import clsx from "clsx";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import Paragraph from "../Paragraph";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  sectionCopy: {
    title: string;
    sub_title: string;
    description: string;
    link?: React.JSX.Element;
  };
};

const SectionSummary = ({ sectionCopy, ...props }: Props) => {
  const { title, sub_title, description, link } = sectionCopy;

  return (
    <div className={clsx("section_summary_center", props.className)}>
      <SectionSubHeading>{sub_title}</SectionSubHeading>
      <SectionHeading>{title}</SectionHeading>
      <Paragraph>
        {description} {link ? link : ""}
      </Paragraph>
    </div>
  );
};

export default SectionSummary;
