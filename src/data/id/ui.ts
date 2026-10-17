import type { UiContent } from "@/domain/content";

export const uiContent: UiContent = {
  skipToContent: "Langsung ke konten",
  menu: {
    open: "Menu",
    close: "Tutup",
    primaryNav: "Navigasi utama",
    mobileNav: "Navigasi seluler",
  },
  language: { label: "Bahasa" },
  footer: {
    operatingBrand: "merupakan merek operasional dari",
    rights: "Hak cipta dilindungi.",
  },
  caseLabels: {
    client: "Klien",
    context: "Konteks",
    solution: "Solusi",
    role: "Peran BBT",
    engagement: "Kerja sama",
    outcome: "Hasil",
  },
  form: {
    labels: {
      name: "Nama",
      organization: "Organisasi",
      orgType: "Jenis organisasi (opsional)",
      role: "Jabatan",
      email: "Email",
      inquiryType: "Jenis kebutuhan",
      timeline: "Perkiraan waktu (opsional)",
      message: "Kebutuhan Anda",
      select: "Pilih",
    },
    errors: {
      name: "Masukkan nama Anda.",
      organization: "Masukkan nama organisasi.",
      email: "Masukkan alamat email yang valid.",
      inquiryType: "Pilih jenis kebutuhan.",
      message: "Jelaskan kebutuhan Anda minimal 20 karakter.",
      consent: "Persetujuan diperlukan untuk mengirim permintaan ini.",
    },
    submit: "Siapkan email",
    statusIdle:
      "Formulir ini menyiapkan email di aplikasi email Anda. Tidak ada yang terkirim sebelum Anda mengirim email tersebut.",
    statusPrepared:
      "Aplikasi email Anda seharusnya terbuka dengan permintaan ini. Kirim email tersebut untuk menyelesaikan permintaan.",
    mail: {
      subjectPrefix: "BBT",
      name: "Nama",
      organization: "Organisasi",
      orgType: "Jenis organisasi",
      role: "Jabatan",
      email: "Email",
      inquiryType: "Jenis kebutuhan",
      timeline: "Perkiraan waktu",
    },
  },
  notFound: {
    seoTitle: "Halaman tidak ditemukan",
    code: "404",
    title: "Halaman tidak ditemukan.",
    sub: "Alamat yang Anda tuju tidak tersedia atau telah dipindahkan.",
    homeCta: "Kembali ke beranda",
  },
};
