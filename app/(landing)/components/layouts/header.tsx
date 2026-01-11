import Image from "next/image";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <header className="w-full bg-white h-fit px-17 py-3.75 flex justify-between">
      <Image
        src={`/images/logo.svg`}
        alt="Logo Rapimprov"
        width={121}
        height={22}
      />
      <nav className="flex gap-8 text-[12px] justify-center items-center h-full font-medium">
        <Link href={`#`}>Home</Link>
        <Link href={`#`}>Event</Link>
        <Link href={`#`}>Contact</Link>
      </nav>
    </header>
  );
};

export default HeaderSection;
