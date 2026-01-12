import Image from "next/image";
import Button from "../ui/button";

const RegistrationSection = () => {
  return (
    <section className="h-fit py-20 px-17 flex justify-center items-center flex-col gap-12">
      {/* ================== SECTION TITLE ================== */}
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="font-bold text-[20px]">Daftar Sekarang</h2>

        {/* Decorative Line */}
        <Image src="/images/line.svg" alt="line" width={80} height={4} />

        {/* Section Description */}
        <p className="text-[14px] text-center">
          Jangan lewatkan kesempatan untuk berpartisipasi dalam Rapat Pimpinan
          Provinsi KADIN Indonesia
        </p>
      </div>

      {/* ================== REGISTRATION CARD ================== */}
      <div className="w-full border border-slate-200 rounded-xl">
        {/* Card Header */}
        <div className="flex justify-center items-center w-full text-center py-3 border-b border-slate-200">
          <h2 className="font-bold text-[12px] w-fit">REGISTRASI</h2>
        </div>

        {/* ================== CARD CONTENT ================== */}
        <div className=" flex py-9 px-6 gap-12">
          {/* Participant Section */}
          <div className="w-full flex flex-col gap-4 bg-red-800">
            {/* Participant Label */}
            <div className="w-fit h-6 border-l-3 border-blue-700 px-3 flex items-center">
              <h2 className="font-bold text-[12px]">PESERTA</h2>
            </div>

            {/* ================== KTA CHECK FORM ================== */}
            <form id="form-cek-kta" className="w-full flex flex-col gap-2">
              <label className="text-[12px]">Nomor KTA</label>

              {/* Input & Submit */}
              <div className="w-full flex gap-2.5">
                <input
                  type="text"
                  name="kta"
                  placeholder="Masukkan Nomor KTA anda"
                  className="text-[12px] px-3 w-full border border-slate-300 rounded-xl"
                />

                <Button
                  type="submit"
                  variant="transparent"
                  className="text-[10px] h-fit w-30 font-semibold"
                >
                  Cek KTA
                </Button>
              </div>

              {/* Helper Text */}
              <p className="text-[12px] text-slate-400">
                Masukkan nomor Kartu Tanda Anggota (KTA) Kadin yang berstatus
                Aktif
              </p>
            </form>
          </div>
          {/* Upload Photo Section */}
          <div className="flex w-full">
            <div className="flex justify-center items-center bg-blue-200 h-fit py-7 w-full border-2 border-slate-300 rounded-2xl border-dashed">
              <div className="flex justify-center items-center w-[200px] h-[300px] gap-12">
                <Image
                  src={`/images/placeholder-2.jpg`}
                  alt="Photo Preview"
                  width={500}
                  height={500}
                  className="aspect"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
