import React from "react";
import { Header, Hero, Wallet, About, Footer } from "./components";
import Rewards from "./components/Rewards";
import RoadMap from "./components/RoadMap";

const App = () => {
  return (
    <>
      {/* Header/NavBar */}
      <div className="HeaderWrapper flex justify-center ">
        <Header />
      </div>

      <main className="space-y-2 ">
        <section className="w-full overflow-hidden  " id="Home">
          <Hero />
        </section>

        <section className="w-full  " id="Token">
          <About />
        </section>

        <section className="w-full py-4 " id="Rewards">
          <Rewards />
        </section>

        <section className="w-full p-13" id="Wallet">
          <Wallet />
        </section>
        <section className="w-full p-13 hidden sm:flex" id="RoadMap">
          <RoadMap />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
