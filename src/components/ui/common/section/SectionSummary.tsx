import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  sectionCopy: {
    title: string;
    sub_title: string;
    description: React.JSX.Element;
  };
};

const SectionSummary = ({ sectionCopy, ...props }: Props) => {
  const { title, sub_title, description } = sectionCopy;

  return (
    <div {...props}>
      <SectionSubHeading className="type_section_sub_heading_md">
        {sub_title}
      </SectionSubHeading>
      <SectionHeading className="type_section_heading_md">
        {title}
      </SectionHeading>
      {description}
    </div>
  );
};

export default SectionSummary;
