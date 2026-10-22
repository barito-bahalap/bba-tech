import type { UiContent } from "@/domain/content";

export const uiContent: UiContent = {
  skipToContent: "Lompat ke konten utama",
  menu: {
    open: "Menu",
    close: "Tutup menu",
    primaryNav: "Navigasi utama",
    mobileNav: "Navigasi seluler",
  },
  language: { label: "Bahasa" },
  footer: {
    operatingBrand: "adalah unit operasional dari",
    rights: "Seluruh hak dilindungi.",
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
      message: "Jelaskan kebutuhan Anda, minimal 20 karakter.",
      consent: "Centang persetujuan untuk melanjutkan.",
    },
    submit: "Siapkan email",
    statusIdle:
      "Formulir ini menyiapkan email di aplikasi email Anda. Tidak ada data yang terkirim sebelum Anda mengirim emailnya.",
    statusPrepared:
      "Aplikasi email Anda akan terbuka dengan permintaan ini. Kirim emailnya untuk menyelesaikan permintaan.",
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
    sub: "Alamat yang Anda tuju tidak ada atau sudah dipindahkan.",
    homeCta: "Kembali ke beranda",
  },
};
