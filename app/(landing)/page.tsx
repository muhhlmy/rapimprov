import HeroSection from "./components/home/hero";
import RegistrationSection from "./components/home/registration";
import FooterSection from "./components/layouts/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RegistrationSection />
      <FooterSection />
    </main>
  );
}
