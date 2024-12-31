import React from "react";
import { Header, Hero, Wallet, About, Footer } from "./components";

const App = () => {
  return (
    <>
      {/* Header/NavBar */}
      <div className="HeaderWrapper flex justify-center">
        <Header />
      </div>

      <main className="space-y-2 ">
        <section className="w-full h-svh overflow-hidden" id="Home">
          <Hero />
        </section>

        <section className="w-full p-7 bg-white" id="About">
          <About />
        </section>

        <section className="w-full p-13 pt-16" id="Wallet">
          <Wallet />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
