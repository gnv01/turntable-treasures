import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { CardsSm } from "../components/cards/CardsSm";
import { CardsLg } from "../components/cards/CardsLg";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <CardsSm />
      <CardsLg />
      <Newsletter />
      <Footer />
    </>
  );
}
