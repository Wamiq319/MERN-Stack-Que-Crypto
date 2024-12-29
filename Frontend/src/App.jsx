import React from "react";
import { Header, Hero, Wallet, About, Footer } from "./components";

const App = () => {
  return (
    <>
      {/* Header/NavBar */}
      <Header />
      {/* 
      <main className="mb-5 space-y-2">
        <section id="Home">
          <Hero />
        </section>

        <section id="About">
          <About />
        </section>

        <section id="Wallet">
          <Wallet />
        </section>
      </main> */}

      <Footer />
    </>
  );
};

export default App;
