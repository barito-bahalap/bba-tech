import type { MainContent } from "@/domain/content";

export const mainId: MainContent = {
  site: {
    name: "Barito Bahalap Tech",
    shortName: "BBT",
    tagline: "Perangkat lunak untuk organisasi",
    description:
      "Barito Bahalap Tech (BBT) membangun dasbor, aplikasi internal, platform, dan otomasi untuk korporasi, BUMN/BUMD, dan institusi publik. Dari nol sampai berjalan, lalu dirawat.",
    url: "https://tech.baritobahalap.com",
    locale: "id_ID",
    holdingName: "Barito Bahalap Agency",
    holdingUrl: "https://baritobahalap.com",
    location: "Palangka Raya, Kalimantan Tengah, Indonesia",
    email: "baritobahalapagency@gmail.com",
    founder: "Basilius Tengang",
    foundingYear: 2026,
  },

  hero: {
    eyebrow: "Barito Bahalap Tech",
    title: "Punya proses manual? Kami jadikan sistem.",
    description:
      "Kami membangun dasbor operasional, platform pengiriman untuk pasar lokal, dan portal organisasi. Dari ide sampai berjalan, lalu kami rawat.",
    primaryCta: {
      label: "Hubungi kami",
      href: "/",
      section: "consultation",
    },
    secondaryCta: { label: "Lihat portofolio", href: "/work" },
    facts: [
      {
        label: "Dibangun",
        value: "Dasbor, aplikasi, platform, otomasi, custom software",
      },
      { label: "Klien", value: "Korporasi, BUMN/BUMD, organisasi, perorangan" },
      { label: "Berbasis di", value: "Palangka Raya, Kalimantan Tengah" },
    ],
  },

  services: {
    intro: {
      eyebrow: "Layanan",
      title: "Apa yang bisa kami buatkan.",
      description:
        "Mulai dari satu dasbor sampai sistem yang menghubungkan banyak bagian organisasi. Setelah jadi, kami tetap merawatnya.",
    },
    items: [
      {
        id: "enterprise-systems",
        title: "Sistem enterprise dan internal",
        summary:
          "Sistem yang mengikuti cara kerja organisasi Anda, lengkap dengan peran pengguna dan alur persetujuan.",
      },
      {
        id: "operational-dashboards",
        title: "Dasbor operasional",
        summary:
          "Semua data penting di satu layar. Laporan tersusun sendiri tanpa rekap manual.",
      },
      {
        id: "business-automation",
        title: "Otomasi proses bisnis",
        summary:
          "Pekerjaan administrasi yang berulang diambil alih sistem, sehingga tim Anda fokus pada hal lain.",
      },
      {
        id: "custom-software",
        title: "Perangkat lunak kustom",
        summary:
          "Aplikasi dan platform yang dibuat khusus ketika produk siap pakai tidak cukup cocok.",
      },
      {
        id: "support-retainers",
        title: "Maintenance",
        summary:
          "Sistem yang sudah berjalan terus diperbaiki dan dikembangkan seiring kebutuhan Anda berubah.",
      },
    ],
  },

  caseStudies: {
    intro: {
      eyebrow: "Karya",
      title: "Sudah berjalan di produksi.",
      description: "Tiga sistem yang bisa kami tunjukkan secara terbuka.",
    },
    items: [
      {
        id: "rso2-telkom-dashboard",
        name: "RSO2 Telkom Dashboard",
        client: "PT Telkom Indonesia",
        location: "Surabaya, Jawa Timur",
        category: "Dasbor operasional dan otomasi laporan",
        context:
          "Klien membutuhkan satu dasbor untuk memantau dan mengelola informasi operasional.",
        solution:
          "Dasbor analitik dan operasional yang dibangun mengikuti alur kerja dan data internal klien. Pelaporan berjalan otomatis.",
        role: "Perancangan, pengembangan, dan pemeliharaan oleh BBT.",
        engagement: "Retainer berkala untuk pengembangan dan pemeliharaan.",
        status: "Beroperasi aktif",
      },
      {
        id: "e-palugada",
        name: "E-Palugada",
        client: "E-Palugada",
        location: "Kasongan, Kalimantan Tengah",
        category: "Platform pengiriman kustom",
        context:
          "Platform pengiriman nasional jangkauannya terbatas di Kasongan. Pasar lokal membutuhkan solusi sendiri.",
        solution:
          "Platform pengiriman berbasis web yang dirancang untuk karakter dan kebutuhan pasar setempat.",
        role: "Perancangan dan pengembangan oleh BBT.",
        engagement: "Retainer berkala untuk pengembangan dan pemeliharaan.",
        status: "Beroperasi aktif",
      },
      {
        id: "ampi-kalteng",
        name: "Situs Web Resmi AMPI Kalteng",
        client: "DPD AMPI Kalteng",
        location: "Palangka Raya, Kalimantan Tengah",
        category: "Platform informasi dan manajemen organisasi",
        context:
          "Organisasi membutuhkan satu tempat untuk mengelola informasi, program kerja, publikasi, dan interaksi dengan publik.",
        solution:
          "Platform web yang memuat informasi organisasi, program, berita, dokumen, media, pendaftaran mitra, dan masukan dari publik.",
        role: "Perancangan dan pengembangan oleh BBT.",
        engagement: "Retainer berkala untuk pengembangan dan pemeliharaan.",
        status: "Beroperasi aktif",
        outcome:
          "Informasi kelembagaan dan interaksi publik kini dikelola dalam satu platform.",
      },
    ],
    note: "Referensi dan dokumentasi tambahan dapat diberikan saat proses pengadaan, dengan persetujuan klien.",
    cta: { label: "Lihat semua karya", href: "/work" },
  },

  work: {
    seo: {
      title: "Karya dan rekam jejak",
      description:
        "Sistem yang telah dibangun Barito Bahalap Tech: RSO2 Telkom Dashboard, E-Palugada, dan situs web resmi AMPI Kalteng.",
    },
    intro: {
      eyebrow: "Karya",
      title: "Tiga sistem yang kami bangun dan rawat.",
      description:
        "Setiap entri memuat apa yang kami kerjakan, peran BBT, dan kelanjutannya setelah serah terima.",
    },
    overview: {
      intro: { eyebrow: "Ikhtisar", title: "Tiga sistem dalam satu tampilan." },
      caption: "Ikhtisar pekerjaan",
      columns: ["Proyek", "Klien", "Kategori", "Status"],
    },
    detailsIntro: { eyebrow: "Rincian", title: "Rincian per proyek." },
    patternsTitle: "Yang sama di setiap proyek",
    patterns: [
      {
        title: "Mengikuti cara kerja klien",
        description:
          "Sistem disesuaikan dengan proses, peran, dan data klien. Klien tidak perlu mengubah cara kerjanya demi sistem.",
      },
      {
        title: "Lingkup yang jelas",
        description:
          "Pekerjaan diserahkan terhadap lingkup dan kriteria penerimaan yang sudah disepakati.",
      },
      {
        title: "Berlanjut setelah selesai",
        description:
          "Setelah serah terima, pengembangan dan pemeliharaan jalan terus secara berkala.",
      },
    ],
  },

  howWeWork: {
    intro: {
      eyebrow: "Cara kerja",
      title: "Enam tahap dari kebutuhan sampai serah terima.",
      description:
        "Klien selalu tahu apa yang akan diterima, kapan meninjaunya, dan bagaimana menyetujuinya.",
    },
    stages: [
      {
        title: "Identifikasi kebutuhan",
        description:
          "Kami berdiskusi dengan pihak-pihak terkait untuk memahami proses, pengguna, data, dan ukuran keberhasilan.",
        output: "Dokumen kebutuhan dan lingkup yang disepakati.",
      },
      {
        title: "Arsitektur dan desain",
        description:
          "Struktur sistem, data, hak akses, dan tampilan disiapkan lalu ditinjau bersama sebelum pengembangan dimulai.",
        output: "Arsitektur sistem, model data, dan desain antarmuka.",
      },
      {
        title: "Pengembangan",
        description:
          "Sistem dibangun bertahap. Klien melihat hasilnya di setiap tahap, bukan hanya di akhir.",
        output: "Hasil bertahap dan laporan kemajuan.",
      },
      {
        title: "Penjaminan mutu",
        description:
          "Kami menguji fungsi, kontrol akses, dan integritas data terhadap kriteria yang ditetapkan di awal.",
        output: "Hasil pengujian dan daftar temuan yang sudah diselesaikan.",
      },
      {
        title: "Implementasi",
        description:
          "Sistem dipasang di lingkungan produksi. Data disiapkan dan pengguna diperkenalkan bersama tim klien.",
        output: "Sistem aktif dan orientasi pengguna.",
      },
      {
        title: "Serah terima dan penerimaan",
        description:
          "Sistem dan dokumentasinya diserahkan secara resmi. Klien menyatakan penerimaan secara tertulis.",
        output: "Dokumentasi serah terima dan berita acara penerimaan.",
      },
    ],
    principlesTitle: "Keamanan dan data",
    principles: [
      {
        title: "Kerahasiaan",
        description:
          "Hanya personel yang mengerjakan proyek yang dapat mengakses informasi klien.",
      },
      {
        title: "Data tetap milik klien",
        description:
          "Data dan materi proyek tidak dibagikan ke pihak lain tanpa persetujuan tegas dari klien.",
      },
      {
        title: "Akses berbasis peran",
        description:
          "Setiap pengguna hanya melihat informasi yang diperlukan untuk tugasnya.",
      },
    ],
    compliance: {
      caption: "Posisi kepatuhan",
      columns: ["Area", "Posisi"],
      rows: [
        [
          "Pelindungan data pribadi",
          "Mengikuti UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi. Peran dan tanggung jawab pemrosesan data diatur dalam perjanjian dengan klien.",
        ],
        [
          "Kerahasiaan",
          "Kerahasiaan kontraktual berlaku untuk seluruh data dan dokumen klien.",
        ],
        [
          "Persyaratan keamanan klien",
          "Kebijakan dan persyaratan tinjauan khusus dari klien dapat dibahas saat lingkup pekerjaan ditentukan.",
        ],
      ],
    },
  },

  engagement: {
    intro: {
      eyebrow: "Yang bisa kami buat",
      title: "Dibuat untuk siapa pun.",
      description:
        "Sistem yang baik dirancang dari sudut pandang penggunanya. Berikut tiga arah yang paling sering kami kerjakan.",
    },
    models: [
      {
        title: "Untuk tim internal",
        description:
          "Dasbor pemantauan, aplikasi persetujuan, dan laporan yang tersusun otomatis.",
      },
      {
        title: "Untuk pelanggan dan publik",
        description:
          "Platform layanan, portal informasi, dan pendaftaran online yang mudah dipakai.",
      },
      {
        title: "Untuk operasional harian",
        description:
          "Otomasi tugas berulang dan integrasi antarsistem agar data berpindah sendiri.",
      },
    ],
    retainer: {
      caption: "Perawatan setelah serah terima",
      columns: ["Komponen", "Cakupan umum", "Diatur dalam perjanjian"],
      rows: [
        [
          "Pemeliharaan",
          "Perbaikan cacat dan perawatan preventif",
          "Lingkup, pengecualian, dan target respons",
        ],
        [
          "Pengembangan lanjutan",
          "Perubahan dan tambahan yang disepakati pada sistem",
          "Alokasi, proses permintaan, dan persetujuan",
        ],
        [
          "Dukungan",
          "Kanal khusus untuk pertanyaan dan laporan insiden",
          "Jam layanan, kanal, dan target respons",
        ],
        [
          "Ketentuan komersial",
          "Biaya periodik tetap untuk lingkup yang disepakati",
          "Biaya, jangka waktu, perpanjangan, dan pengakhiran",
        ],
      ],
    },
    procurement: {
      title: "Siap untuk pengadaan institusional.",
      note: "Kontrak dikelola oleh Barito Bahalap Agency. Harga ditentukan per proyek dan tidak dipublikasikan sebagai daftar harga tetap.",
      items: [
        "Surat lingkup kerja tertulis dengan hasil yang terukur",
        "Termin pembayaran terkait serah terima dan penerimaan resmi",
        "Ketentuan kerahasiaan atas data dan dokumen klien",
        "Lingkup retainer dan tingkat layanan tertulis dalam perjanjian",
      ],
    },
  },

  about: {
    seo: {
      title: "Tentang BBT",
      description:
        "Barito Bahalap Tech membangun dan merawat sistem digital untuk organisasi dari Palangka Raya, Kalimantan Tengah.",
    },
    intro: {
      eyebrow: "Tentang",
      title: "Tim teknologi dari Palangka Raya.",
    },
    paragraphs: [
      "Barito Bahalap Tech (BBT) membangun sistem yang dipakai sehari-hari oleh organisasi: dasbor, aplikasi internal, otomasi, dan integrasi. Kami bekerja dari Palangka Raya untuk klien di Kalimantan Tengah dan Jawa Timur.",
      "Setiap proyek dipimpin langsung oleh Tech Delivery Lead, mulai dari arsitektur sampai serah terima. Tim bertambah bertahap mengikuti kebutuhan proyek.",
    ],
    facts: [
      { label: "Bagian dari", value: "Barito Bahalap Agency" },
      { label: "Direktur", value: "Basilius Tengang" },
      { label: "Berbasis di", value: "Palangka Raya, Kalimantan Tengah" },
      { label: "Berdiri", value: "2026" },
      {
        label: "Badan hukum",
        value: "PT Barito Bahalap Agency",
      },
    ],
    valuesTitle: "Cara kami bekerja",
    values: [
      {
        title: "Sedikit sistem, dirawat dengan baik",
        description:
          "Kami lebih suka membangun sedikit sistem dan merawatnya daripada mengerjakan banyak proyek sekali jadi.",
      },
      {
        title: "Serah terima yang tercatat",
        description:
          "Setiap sistem diserahkan bersama dokumentasi dan penerimaan tertulis dari klien.",
      },
      {
        title: "Satu penanggung jawab teknis",
        description:
          "Tech Delivery Lead memegang keputusan arsitektur, pendekatan pengembangan, dan prioritas pemeliharaan.",
      },
    ],
  },

  contact: {
    intro: {
      eyebrow: "Konsultasi",
      title: "Ceritakan apa yang ingin Anda bangun.",
      description:
        "Cukup beberapa kalimat. Kami akan membalas dengan pertanyaan lanjutan dan langkah berikutnya.",
    },
    includeTitle: "Cukup sertakan",
    includeList: [
      "Nama & alamat email Anda",
      "Sistem atau masalah yang ingin diselesaikan",
      "Target waktu, jika sudah ada",
    ],
    inquiryTypes: [
      { value: "new-system", label: "Sistem atau aplikasi baru" },
      { value: "dashboard", label: "Dasbor atau pelaporan" },
      { value: "automation", label: "Otomasi proses bisnis" },
      { value: "integration", label: "Integrasi atau migrasi sistem" },
      {
        value: "support",
        label: "Dukungan atau retainer untuk sistem yang sudah ada",
      },
      { value: "other", label: "Lainnya" },
    ],
    orgTypes: [
      { value: "bumn-bumd", label: "BUMN / BUMD" },
      { value: "government", label: "Pemerintah / institusi publik" },
      { value: "corporate", label: "Korporasi / swasta" },
      { value: "association", label: "Organisasi / asosiasi" },
      { value: "other", label: "Lainnya" },
    ],
    timelines: [
      { value: "urgent", label: "Segera (kurang dari 1 bulan)" },
      { value: "1-3-months", label: "1 sampai 3 bulan" },
      { value: "3-6-months", label: "3 sampai 6 bulan" },
      { value: "planning", label: "Masih tahap perencanaan" },
    ],
    consentText:
      "Saya setuju data ini digunakan untuk menanggapi permintaan saya, sesuai kebijakan privasi.",
    emailLabel: "Email",
  },

  ctaBand: {
    title: "Ada proses yang ingin dijadikan sistem?",
    description:
      "Ceritakan secara singkat. Kami akan membalas dengan langkah berikutnya.",
    cta: {
      label: "Hubungi kami",
      href: "/",
      section: "consultation",
    },
  },
};
