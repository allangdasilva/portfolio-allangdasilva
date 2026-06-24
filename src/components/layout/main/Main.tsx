import Hero from "../../ui/main/hero/Hero";
import TributesSection from "../../ui/main/tributes-section/TributesSection";
import ToolsSection from "../../ui/main/tools-section/ToolsSection";
import TrainingSection from "../../ui/main/training-section/TrainingSection";
import ContactSection from "../../ui/main/contact-section/ContactSection";

const Main = () => {
  return (
    <main>
      <Hero />
      <TributesSection />
      <ToolsSection />
      <TrainingSection />
      <ContactSection />
    </main>
  );
};

export default Main;
