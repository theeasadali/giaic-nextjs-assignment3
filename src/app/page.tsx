import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-4/5 mx-auto">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
