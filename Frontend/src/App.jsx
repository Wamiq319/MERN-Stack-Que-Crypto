import React from "react";
import { Header, Hero, Wallet, About, Footer } from "./components";

const App = () => {
  return (
    <>
      {/* Header/NavBar */}
      <div className="HeaderWrapper flex justify-center">
        {" "}
        <Header />
      </div>

      <main className="mb-5 space-y-2 ">
        <section className="w-full" id="Home">
          <Hero />
        </section>

        <section className="w-full pt-7" id="About">
          <About />
        </section>

        <section className="w-full" id="Wallet">
          <Wallet />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
