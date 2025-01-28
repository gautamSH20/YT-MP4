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
        className={`min-h-screen max-h-full flex flex-col justify-center items-center p-4 dark:bg-black  bg-white`}
      >
        <section className="absolute top-0">
          <Nav onclick={() => setval((e) => !e)} />
        </section>
        <Home />
        <section className="absolute bottom-0 ">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
