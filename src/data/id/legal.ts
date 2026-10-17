import type { LegalPageContent } from "@/domain/content";

export const privacy: LegalPageContent = {
  title: "Kebijakan privasi",
  description:
    "Cara Barito Bahalap Tech menangani data pribadi yang dikirimkan melalui situs web ini.",
  updated: "[ISI TANGGAL SEBELUM LAUNCH]", // TODO: SET DATE BEFORE LAUNCH
  sections: [
    {
      id: "scope",
      heading: "Cakupan",
      paragraphs: [
        "Kebijakan ini berlaku untuk data pribadi yang dikirimkan melalui situs web Barito Bahalap Tech (BBT). BBT adalah merek operasional Barito Bahalap Agency, berkedudukan di Palangka Raya, Kalimantan Tengah, Indonesia.",
      ],
    },
    {
      id: "data-collected",
      heading: "Data yang kami kumpulkan",
      paragraphs: [
        "Situs web ini tidak memerlukan akun. Jika Anda mengirim permintaan konsultasi, kami menerima data yang Anda berikan: nama, organisasi, jenis organisasi, jabatan, alamat email, jenis kebutuhan, perkiraan waktu, dan pesan.",
        "Formulir menyiapkan email di aplikasi email Anda sendiri. Data baru dikirim ketika Anda mengirim email tersebut.",
      ],
    },
    {
      id: "purpose",
      heading: "Tujuan pemrosesan",
      paragraphs: [
        "Kami menggunakan data yang dikirim hanya untuk menanggapi permintaan Anda dan menyiapkan proposal atau tindak lanjut jika Anda memintanya.",
      ],
    },
    {
      id: "rights",
      heading: "Dasar hukum dan hak Anda",
      paragraphs: [
        "Data pribadi diproses sesuai Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi. Anda dapat meminta akses, koreksi, atau penghapusan data pribadi Anda dengan menghubungi kami pada alamat di bawah.",
      ],
    },
    {
      id: "retention",
      heading: "Penyimpanan dan pembagian",
      paragraphs: [
        "Data permintaan disimpan selama diperlukan untuk menangani permintaan dan kerja sama yang mungkin timbul. Data tidak dijual. Permintaan diterima melalui kotak masuk email Barito Bahalap Agency, dan tidak diteruskan kepada pihak lain di luar kebutuhan penanganan permintaan tanpa persetujuan Anda.",
      ],
    },
    {
      id: "contact",
      heading: "Kontak",
      paragraphs: [
        "Pertanyaan terkait privasi dapat dikirim ke info@baritobahalap.com.",
      ],
    },
  ],
};

export const terms: LegalPageContent = {
  title: "Ketentuan penggunaan",
  description:
    "Ketentuan yang mengatur penggunaan situs web Barito Bahalap Tech.",
  updated: "[ISI TANGGAL SEBELUM LAUNCH]",
  sections: [
    {
      id: "use",
      heading: "Penggunaan situs web",
      paragraphs: [
        "Situs web ini memberikan informasi umum tentang layanan Barito Bahalap Tech (BBT). Isinya bukan penawaran, kutipan harga, atau kontrak.",
      ],
    },
    {
      id: "engagements",
      heading: "Kerja sama",
      paragraphs: [
        "Layanan diberikan hanya berdasarkan perjanjian tertulis yang mengatur ruang lingkup, hasil kerja, biaya, dan tanggung jawab. Informasi pada situs web ini tidak menggantikan ketentuan tersebut.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Kekayaan intelektual",
      paragraphs: [
        "Konten, desain, dan merek dagang pada situs web ini adalah milik Barito Bahalap Agency dan merek operasionalnya. Nama pihak ketiga dan referensi proyek digunakan untuk menjelaskan pekerjaan yang telah dilakukan dan tetap menjadi milik pemiliknya masing-masing.",
      ],
    },
    {
      id: "accuracy",
      heading: "Akurasi",
      paragraphs: [
        "Kami berupaya menjaga situs web ini tetap akurat dan terkini, tetapi tidak menjamin bahwa isinya lengkap atau bebas dari kesalahan.",
      ],
    },
    {
      id: "governing-law",
      heading: "Hukum yang berlaku",
      paragraphs: ["Ketentuan ini diatur oleh hukum Republik Indonesia."],
    },
  ],
};
