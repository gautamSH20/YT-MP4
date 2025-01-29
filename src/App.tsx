import { useState } from "react";
import "./App.css";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import { Nav } from "./pages/Nav";

function App() {
  const [val, setval] = useState(false);
  return (
    <div className={` ${val ? "dark " : ""}`}>
      <div
        className={`min-h-screen max-h-screen flex flex-col justify-center items-center p-5 dark:bg-black  bg-white`}
      >
        <section className="fixed top-0">
          <Nav onclick={() => setval((e) => !e)} />
        </section>
        <section className="mb-10 md:mb-0">
          <Home />
        </section>
        <section className="fixed bottom-0">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
