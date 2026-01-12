import Image from "next/image";
import Button from "../ui/button";

const RegistrationSection = () => {
  return (
    <section className="h-fit py-20 px-16 flex justify-center items-center ">
      {/* Title */}
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="font-bold text-[20px]">Daftar Sekarang</h2>
        <Image src={`/images/line.svg`} alt="line" width={80} height={4} />
        <p className="text-[14px]">
          Jangan lewatkan kesempatan untuk berpartisipasi dalam Rapat Pimpinan
          Provinsi KADIN Indonesia
        </p>
        {/* Regist Form */}
        <div className="w-full border border-slate-200 rounded-xl">
          {/* Title */}
          <div className="w-full text-center py-3 border-b border-slate-200">
            <h2 className="font-bold text-[12px]">REGISTRASI</h2>
          </div>
          {/* Form */}
          <div className="py-9 px-6">
            {/* Form */}
            <div className="w-full h-fit flex flex-col gap-4">
              {/* Input Title */}
              <div className="w-fit h-6 border-l-2 border-blue-700 px-3 flex items-center">
                <h2 className="font-bold text-[12px]">PESERTA</h2>
              </div>
              {/* Input */}
              <div className="w-full">
                <label className="text-[12px]">Nomor KTA</label>
                {/* Input */}
                <div className="w-full flex gap-2.5">
                  <input
                    type="text"
                    placeholder="Masukkan Nomor KTA anda"
                    className="text-[12px] py-2.5 px-2.5 w-full border border-slate-300 rounded-xl"
                  />
                  <Button
                    variant="transparent"
                    className="text-[10px] py-2.5! px-10! h-fit w-44 font-semibold"
                  >
                    Cek KTA
                  </Button>
                </div>
                <label className="text-[12px] text-slate-400">
                  Masukkan nomor Kartu Tanda Anggota (KTA) Kadin yang berstatus
                  Aktif
                </label>
              </div>
            </div>
            {/* Button */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
