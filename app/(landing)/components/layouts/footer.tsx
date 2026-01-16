import Image from "next/image";
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const FooterSection = () => {
  return (
    <footer className="bg-primary py-12 px-16 flex flex-col gap-12 rounded-tl-4xl rounded-tr-4xl">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-3">
          <Image
            src={`/images/logo-kadin.svg`}
            width={53}
            height={53}
            alt="Logo KADIN"
          />
          <h2 className="font-bold text-3xl text-white">RAPIMPROV</h2>
        </div>
        <div className="flex gap-5 text-white">
          <FiInstagram size={24} />
          <FiLinkedin size={24} />
          <FiTwitter size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="bg-white w-fit px-4 py-2 rounded-xl font-semibold">
          Contact Us:
        </div>
        <div className="flex flex-col text-white gap-2">
          <p>Email: rapimprov@kadin.id</p>
          <p>Phone: 555-567-8901</p>
          <p>
            Address: Jl. H. R. Rasuna Said Blok X-5 No.Kav. 2-3, Kuningan,
            Jakarta 12950
          </p>
        </div>
      </div>
      <div className="w-full h-px bg-white"></div>
      <div className="text-white flex gap-6">
        <p>© 2025 Kadin. All Rights Reserved.</p>
        <p className="underline">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default FooterSection;
