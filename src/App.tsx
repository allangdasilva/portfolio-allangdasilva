import { useEffect, useState } from "react";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import { MotionConfig } from "motion/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <Main />
      <Footer />
      {/* o loader é removido do DOM assim que a animação termina */}
      {/* {isLoading && <Curtain onFinish={() => setIsLoading(false)} />} */}
    </MotionConfig>
  );
}

export default App;
