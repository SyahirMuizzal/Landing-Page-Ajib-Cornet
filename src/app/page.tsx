import CtaSection from "./components/cta-section";
import DetailProduct from "./components/detail-product";
import Footer from "./components/footer";
import Headers from "./components/headers";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <div className="">
      <Headers />
      <HeroSection />
      <DetailProduct />
      <CtaSection />
      <Footer />
    </div>
  );
}
