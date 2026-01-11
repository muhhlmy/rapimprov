import Image from "next/image";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section
      id="heroSection"
      className="min-h-screen bg-linear-to-t from-white to-primary/30 flex flex-col justify-center items-center gap-6"
    >
      <Image
        src={`/images/logo-kadin.svg`}
        alt="Logo KADIN"
        width={160}
        height={157}
      />
      <div className="font-bold flex flex-col justify-center items-center w-fit ">
        <h1 className="text-5xl">RAPIMPROV</h1>
        <h2 className="text-3xl">KADIN</h2>
      </div>
      <Button className="text-[12px] font-semibold tracking-widest">
        DAFTAR SEKARANG
      </Button>
    </section>
  );
};

export default HeroSection;
