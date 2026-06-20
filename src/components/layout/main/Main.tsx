import Hero from "../../ui/main/hero/Hero";
import ToolsSection from "../../ui/main/tools-section/ToolsSection";
import TrainingSection from "../../ui/main/training-section/TrainingSection";
import TributeSection from "../../ui/main/tribute-section/TributeSection";

const Main = () => {
  return (
    <main>
      <Hero />
      <TributeSection />
      <ToolsSection />
      <TrainingSection />
    </main>
  );
};

export default Main;
