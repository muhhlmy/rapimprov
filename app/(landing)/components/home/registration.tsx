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
      <div className="w-full border border-slate-200 rounded-xl flex flex-col justify-center items-center ">
        {/* ================== CARD HEADER ================== */}
        <div className="flex justify-center items-center w-full text-center border-b  border-slate-200 py-3">
          <h2 className="font-bold text-[12px] w-fit">REGISTRASI</h2>
        </div>

        {/* ================== CARD CONTENT ================== */}
        <div className="w-full h-fit py-9 px-6 ">
          <div className="flex gap-12 w-full 0">
            {/* Participant Section */}
            <div className="w-full flex flex-col gap-4 ">
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
            <div className="flex w-full flex-col gap-6">
              {/* Photo Section */}
              <div className="flex justify-center flex-col gap-10 items-center bg-blue-50 h-fit py-7 w-full border-2 border-slate-300 rounded-2xl border-dashed">
                <div className=" w-fit h-fit flex justify-center items-center gap-10">
                  <Image
                    src="/images/placeholder-2.jpg"
                    alt="Photo Preview"
                    width={250}
                    height={250}
                    className="rounded-xl"
                  />
                  <Image
                    src="/images/placeholder-2.jpg"
                    alt="Photo Preview"
                    width={250}
                    height={250}
                    className="rounded-xl"
                  />
                </div>
                <Button variant="transparent" className="bg-white">
                  Upload Photo
                </Button>
              </div>
              {/* Information Section */}
              <div className="bg-blue-50 py-8 px-6 border-2 border-slate-300 rounded-2xl border-dashed">
                <h2>Ketentuan Pas Photo:</h2>
                <ul className="list-disc list-inside mt-2 px-4">
                  <li>Format 4x6 dengan latar belakang berwarna</li>
                  <li>Foto formal/resmi dengan pakaian rapi dan sopan</li>
                  <li>
                    Wajah terlihat jelas dan tidak menggunakan kacamata hitam
                  </li>
                  <li>Format file JPG atau PNG dengan ukuran maksimal 2MB</li>
                  <li>Foto terbaru (diambil dalam 6 bulan terakhir)</li>
                </ul>
              </div>
            </div>
            {/* Button Submit */}
          </div>
        </div>
        {/* ================== Submit Button ================== */}
        <div className="flex flex-col justify-center items-center gap-3 ">
          <Button className="w-fit px-28!">Daftar Sekarang</Button>
          <p className="text-[12px] text-slate-500 gap-3">
            Mohon cek KTA terlebih dahulu sebelum menlanjutkan Pendaftaran
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
