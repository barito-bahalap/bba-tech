import type { MainContent } from "@/domain/content";

// TODO(consent): Telkom, AMPI Kalteng and E-Palugada need written permission
// before launch. If Telkom has not approved being named, replace `client` with
// "BUMN telekomunikasi nasional" and `location` with "Jawa Timur".
// TODO(verify): confirm each status and the retainer wording below.
// TODO(placeholder): about.facts "Badan hukum" must be filled before launch.

export const mainId: MainContent = {
  site: {
    name: "Barito Bahalap Tech",
    shortName: "BBT",
    tagline: "Infrastruktur digital dan sistem enterprise",
    description:
      "Barito Bahalap Tech (BBT) merancang, membangun, dan memelihara sistem enterprise, dasbor operasional, dan otomasi proses bisnis untuk korporasi, BUMN/BUMD, dan institusi publik, didukung perjanjian layanan jangka panjang.",
    url: "https://tech.baritobahalap.com",
    locale: "id_ID",
    holdingName: "Barito Bahalap Agency",
    holdingUrl: "https://baritobahalap.com",
    location: "Palangka Raya, Kalimantan Tengah, Indonesia",
    email: "info@baritobahalap.com",
    founder: "Basilius Tengang",
    foundingYear: 2026,
  },

  hero: {
    eyebrow: "Barito Bahalap Tech",
    title:
      "Infrastruktur digital untuk organisasi yang bergantung pada sistem yang andal.",
    description:
      "Kami merancang, membangun, dan memelihara sistem enterprise, dasbor operasional, dan otomasi proses bisnis untuk korporasi, BUMN, dan institusi publik. Setiap sistem diserahkan dengan ruang lingkup yang jelas dan didukung dalam jangka panjang.",
    primaryCta: {
      label: "Ajukan konsultasi",
      href: "/",
      section: "consultation",
    },
    secondaryCta: { label: "Lihat karya", href: "/work" },
    facts: [
      { label: "Fokus", value: "Sistem enterprise dan internal" },
      { label: "Kerja sama", value: "Proyek dengan dukungan retainer" },
      { label: "Berbasis di", value: "Palangka Raya, Kalimantan Tengah" },
    ],
  },

  services: {
    intro: {
      eyebrow: "Layanan",
      title: "Layanan teknologi yang dirancang di sekitar operasional.",
      description:
        "Setiap layanan dibatasi pada kebutuhan bisnis yang jelas, diserahkan sesuai kriteria penerimaan yang disepakati, dan, untuk sistem yang beroperasi, didukung melalui perjanjian berkelanjutan.",
    },
    items: [
      {
        id: "enterprise-systems",
        title: "Sistem enterprise dan internal",
        summary:
          "Sistem informasi yang dibangun di sekitar alur kerja, peran, dan struktur persetujuan organisasi Anda.",
      },
      {
        id: "operational-dashboards",
        title: "Dasbor operasional dan pelaporan",
        summary:
          "Dasbor terpusat yang menggabungkan data operasional dan mengurangi pekerjaan pelaporan manual.",
      },
      {
        id: "business-automation",
        title: "Otomasi proses bisnis",
        summary:
          "Otomasi proses administrasi dan pelaporan berulang yang saat ini masih dikerjakan secara manual.",
      },
      {
        id: "custom-software",
        title: "Perangkat lunak kustom",
        summary:
          "Aplikasi dan platform yang dibangun sesuai kebutuhan ketika produk siap pakai tidak cocok dengan kondisi lokal atau organisasi.",
      },
      {
        id: "system-integration",
        title: "Integrasi sistem",
        summary:
          "Menghubungkan platform, sumber data, dan alat yang sudah ada agar informasi berpindah tanpa input ulang.",
      },
      {
        id: "support-retainers",
        title: "Dukungan teknis jangka panjang dan retainer",
        summary:
          "Pemeliharaan, perbaikan, dan pengembangan berkelanjutan atas sistem yang telah diserahkan, di bawah perjanjian layanan yang jelas.",
      },
    ],
  },

  caseStudies: {
    intro: {
      eyebrow: "Karya",
      title: "Sistem yang beroperasi di bawah dukungan berkelanjutan.",
      description: "Tiga pekerjaan yang dapat BBT jelaskan secara terbuka.",
    },
    items: [
      {
        id: "rso2-telkom-dashboard",
        name: "RSO2 Telkom Dashboard",
        client: "PT Telkom Indonesia (Regional 3)",
        location: "Surabaya, Jawa Timur",
        category: "Dasbor operasional dan otomasi laporan",
        context:
          "Kebutuhan akan dasbor untuk mendukung pemantauan dan pengelolaan informasi operasional secara terpusat.",
        solution:
          "Dasbor analitik dan operasional yang dirancang mengikuti alur kerja dan kebutuhan data internal klien, disertai pelaporan otomatis.",
        role: "Perancangan, pengembangan, dan pemeliharaan sistem oleh BBT.",
        engagement:
          "Retainer berkala untuk pengembangan dan pemeliharaan lanjutan.",
        status: "Beroperasi aktif",
      },
      {
        id: "e-palugada",
        name: "E-Palugada",
        client: "E-Palugada",
        location: "Kasongan, Kalimantan Tengah",
        category: "Platform pengiriman kustom",
        context:
          "Platform pengiriman berskala nasional memiliki jangkauan terbatas di wilayah Kasongan, sehingga dibutuhkan solusi yang sesuai dengan pasar lokal.",
        solution:
          "Platform pengiriman berbasis web yang dirancang khusus untuk karakteristik dan kebutuhan pasar lokal.",
        role: "Perancangan dan pengembangan sistem oleh BBT.",
        engagement:
          "Retainer berkala untuk pengembangan dan pemeliharaan lanjutan.",
        status: "Beroperasi aktif",
      },
      {
        id: "ampi-kalteng",
        name: "Situs Web Resmi AMPI Kalteng",
        client: "AMPI Kalimantan Tengah",
        location: "Kalimantan Tengah",
        category: "Platform informasi dan manajemen organisasi",
        context:
          "Kebutuhan akan platform pusat untuk mengelola informasi organisasi, program kerja, publikasi, dan interaksi publik.",
        solution:
          "Platform web serba-ada yang mencakup informasi organisasi, program, berita, dokumen, media, pendaftaran kemitraan, dan masukan publik.",
        role: "Perancangan dan pengembangan sistem oleh BBT.",
        engagement:
          "Retainer berkala untuk pengembangan dan pemeliharaan lanjutan.",
        status: "Telah diserahkan",
        outcome:
          "Satu platform tempat organisasi mengelola informasi kelembagaan dan interaksi publik secara digital.",
      },
    ],
    note: "Proyek yang tercantum adalah pekerjaan yang dapat dijelaskan BBT secara terbuka. Referensi dan dokumentasi tambahan dapat diberikan saat proses pengadaan, dengan persetujuan klien.",
    cta: { label: "Lihat semua karya", href: "/work" },
  },

  work: {
    seo: {
      title: "Karya dan rekam jejak",
      description:
        "Ikhtisar pekerjaan yang telah diserahkan Barito Bahalap Tech: RSO2 Telkom Dashboard, E-Palugada, dan situs web resmi AMPI Kalteng.",
    },
    intro: {
      eyebrow: "Karya",
      title: "Rekam jejak sistem yang diserahkan dan dipelihara.",
      description:
        "Ikhtisar pekerjaan yang dapat BBT jelaskan secara terbuka, masing-masing dengan ruang lingkup, peran BBT, dan bentuk dukungan lanjutan yang jelas.",
    },
    overview: {
      intro: { eyebrow: "Ikhtisar", title: "Tiga sistem dalam satu tampilan." },
      caption: "Ikhtisar pekerjaan",
      columns: ["Proyek", "Klien", "Kategori", "Status"],
    },
    detailsIntro: { eyebrow: "Rincian", title: "Rincian per proyek." },
    patternsTitle: "Pola kerja yang sama di setiap proyek",
    patterns: [
      {
        title: "Dibangun di sekitar alur kerja klien",
        description:
          "Sistem dirancang mengikuti proses, peran, dan kebutuhan data internal klien, bukan sebaliknya.",
      },
      {
        title: "Ruang lingkup yang jelas",
        description:
          "Setiap pekerjaan diserahkan terhadap ruang lingkup dan kriteria penerimaan yang disepakati.",
      },
      {
        title: "Dilanjutkan melalui retainer",
        description:
          "Setelah serah terima, pengembangan dan pemeliharaan berlanjut melalui retainer berkala.",
      },
    ],
  },

  howWeWork: {
    intro: {
      eyebrow: "Cara kerja",
      title: "Tahapan yang jelas, tata kelola yang terdokumentasi.",
      description:
        "Setiap proyek mengikuti tahapan yang sama, sehingga klien tahu apa yang akan diserahkan, kapan ditinjau, dan bagaimana diterima.",
    },
    stages: [
      {
        title: "Identifikasi kebutuhan",
        description:
          "Sesi terstruktur bersama pemangku kepentingan klien untuk mendokumentasikan proses, pengguna, sumber data, batasan, dan kriteria keberhasilan.",
        output: "Dokumen kebutuhan dan ruang lingkup yang disepakati.",
      },
      {
        title: "Arsitektur dan desain",
        description:
          "Arsitektur sistem, model data, model akses, dan desain antarmuka disiapkan dan ditinjau bersama klien sebelum pengembangan dimulai.",
        output: "Gambaran arsitektur, model data, dan desain antarmuka.",
      },
      {
        title: "Pengembangan",
        description:
          "Pengembangan iteratif sesuai ruang lingkup yang disepakati, dengan hasil bertahap yang ditinjau klien selama proses pembangunan.",
        output: "Hasil sistem bertahap dan laporan kemajuan.",
      },
      {
        title: "Penjaminan mutu",
        description:
          "Pengujian fungsional, kontrol akses, dan integritas data terhadap kriteria penerimaan yang ditetapkan di awal kerja sama.",
        output: "Hasil pengujian dan daftar temuan yang telah diselesaikan.",
      },
      {
        title: "Implementasi",
        description:
          "Penerapan ke lingkungan produksi, persiapan data, dan orientasi pengguna, berkoordinasi dengan tim klien.",
        output: "Sistem aktif dan orientasi pengguna.",
      },
      {
        title: "Serah terima dan penerimaan",
        description:
          "Serah terima resmi sistem dan dokumentasi, serta penerimaan tertulis oleh klien terhadap kriteria yang disepakati.",
        output: "Dokumentasi serah terima dan berita acara penerimaan.",
      },
    ],
    principlesTitle: "Keamanan dan tata kelola data",
    principles: [
      {
        title: "Kerahasiaan",
        description:
          "Informasi klien dan dokumen proyek hanya diakses oleh personel yang terlibat langsung dalam pekerjaan, dan ketentuan kerahasiaan dituangkan dalam setiap kontrak.",
      },
      {
        title: "Isolasi data",
        description:
          "Data proyek dan materi klien disimpan dan diakses di dalam BBT. Data tersebut tidak dibagikan kepada unit operasional BBA lainnya tanpa persetujuan tegas dari klien.",
      },
      {
        title: "Kontrol akses",
        description:
          "Sistem dirancang dengan akses berbasis peran sehingga setiap pengguna hanya melihat informasi yang dibutuhkan fungsinya.",
      },
      {
        title: "Akuntabilitas yang jelas",
        description:
          "Keputusan teknis atas arsitektur, pendekatan pengembangan, dan prioritas pemeliharaan berada pada Delivery Lead BBT. Kontrak, keuangan, dan kepatuhan hukum diawasi di tingkat holding.",
      },
    ],
    compliance: {
      caption: "Posisi kepatuhan",
      columns: ["Area", "Posisi"],
      rows: [
        [
          "Pelindungan data pribadi",
          "Ditangani sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi. Peran dan tanggung jawab pemrosesan dituangkan dalam perjanjian dengan klien.",
        ],
        [
          "Kerahasiaan",
          "Kerahasiaan kontraktual berlaku untuk data dan dokumen klien, termasuk antar unit operasional BBA.",
        ],
        [
          "Sertifikasi",
          "BBT saat ini tidak memiliki dan tidak mengklaim sertifikasi keamanan formal apa pun.",
        ],
        [
          "Persyaratan keamanan klien",
          "Kebijakan dan persyaratan tinjauan khusus klien dapat dibahas pada tahap penentuan ruang lingkup.",
        ],
      ],
    },
  },

  engagement: {
    intro: {
      eyebrow: "Model kerja sama",
      title: "Dari pengiriman hingga keberlanjutan.",
      description:
        "Proyek membangun sistemnya. Retainer menjaga sistem tetap akurat, aman, dan selaras dengan cara kerja organisasi, tanpa membuka siklus pengadaan baru untuk setiap perubahan.",
    },
    models: [
      {
        title: "Proyek",
        description:
          "Sistem baru atau perubahan besar dengan ruang lingkup, hasil kerja, dan kriteria penerimaan tertulis.",
      },
      {
        title: "Retainer",
        description:
          "Pemeliharaan dan pengembangan lanjutan atas sistem yang beroperasi, dengan biaya periodik tetap untuk ruang lingkup yang disepakati.",
      },
      {
        title: "Dukungan dengan SLA",
        description:
          "Dukungan atas sistem yang sudah berjalan, dengan kanal, jam layanan, dan target respons yang disepakati secara tertulis.",
      },
    ],
    retainer: {
      caption: "Struktur retainer",
      columns: ["Komponen", "Cakupan umum", "Diatur dalam perjanjian"],
      rows: [
        [
          "Pemeliharaan",
          "Perbaikan cacat dan perawatan preventif sistem",
          "Ruang lingkup, pengecualian, dan target respons",
        ],
        [
          "Pengembangan lanjutan",
          "Perubahan dan penambahan yang disepakati pada sistem yang diserahkan",
          "Alokasi, proses permintaan, dan persetujuan",
        ],
        [
          "Dukungan",
          "Kanal khusus untuk pertanyaan dan laporan insiden",
          "Jam layanan, kanal, dan target respons",
        ],
        [
          "Pelaporan",
          "Ringkasan berkala atas pekerjaan yang dilakukan dan butir yang masih terbuka",
          "Frekuensi dan format",
        ],
        [
          "Ketentuan komersial",
          "Biaya periodik tetap untuk ruang lingkup yang disepakati",
          "Biaya, jangka waktu, perpanjangan, dan pengakhiran",
        ],
      ],
    },
    procurement: {
      title: "Siap untuk pengadaan institusional.",
      note: "Kontrak dan hubungan komersial dikelola di tingkat holding oleh Barito Bahalap Agency agar standar tetap konsisten. Harga ditentukan per proyek dan tidak dipublikasikan sebagai daftar harga tetap.",
      items: [
        "Surat lingkup kerja tertulis dengan hasil kerja yang terukur",
        "Termin pembayaran terkait serah terima dan penerimaan resmi",
        "Ketentuan kerahasiaan atas data dan dokumen klien",
        "Ruang lingkup retainer dan tingkat layanan tertulis dalam perjanjian",
        "Dukungan untuk persyaratan pengadaan dan administrasi khusus klien",
      ],
    },
  },

  about: {
    seo: {
      title: "Tentang BBT",
      description:
        "Barito Bahalap Tech adalah merek operasional teknologi dari Barito Bahalap Agency, berbasis di Palangka Raya, Kalimantan Tengah.",
    },
    intro: {
      eyebrow: "Tentang",
      title: "Divisi teknologi dari Barito Bahalap Agency.",
    },
    paragraphs: [
      "Barito Bahalap Tech (BBT) adalah merek operasional Barito Bahalap Agency di bidang teknologi dan infrastruktur digital, berbasis di Palangka Raya, Kalimantan Tengah.",
      "BBT saat ini berukuran kecil dan dipimpin langsung oleh pendirinya, yang bertanggung jawab atas arsitektur, pengembangan, dan serah terima setiap proyek. Tim bertambah secara bertahap sesuai kebutuhan proyek.",
    ],
    facts: [
      { label: "Merek operasional dari", value: "Barito Bahalap Agency" },
      { label: "Pendiri", value: "Basilius Tengang" },
      { label: "Berbasis di", value: "Palangka Raya, Kalimantan Tengah" },
      { label: "Berdiri", value: "2026" },
      {
        label: "Badan hukum",
        value: "[ISI SEBELUM LAUNCH: bentuk dan status badan hukum]",
      },
    ],
    valuesTitle: "Prinsip kerja kami",
    values: [
      {
        title: "Lebih sedikit sistem, dipelihara dengan baik",
        description:
          "Kami memilih membangun lebih sedikit sistem dan memeliharanya dengan baik, bukan banyak proyek sekali jadi.",
      },
      {
        title: "Serah terima yang terdokumentasi",
        description:
          "Setiap sistem diserahkan bersama dokumentasi dan penerimaan tertulis oleh klien.",
      },
      {
        title: "Akuntabilitas yang jelas",
        description:
          "Keputusan teknis berada pada Delivery Lead BBT. Kontrak, keuangan, dan kepatuhan hukum diawasi di tingkat holding.",
      },
    ],
  },

  contact: {
    intro: {
      eyebrow: "Konsultasi",
      title: "Ajukan konsultasi.",
      description:
        "Jelaskan kebutuhan Anda dalam beberapa kalimat. Kami akan menanggapi dengan langkah berikutnya dan informasi yang dibutuhkan untuk menentukan ruang lingkup.",
    },
    includeTitle: "Yang perlu disertakan",
    includeList: [
      "Organisasi dan jabatan Anda",
      "Proses atau sistem yang dimaksud",
      "Siapa penggunanya dan kira-kira berapa jumlahnya",
      "Alat atau sumber data yang sudah ada",
      "Target waktu dan perkiraan anggaran, jika ada",
      "Jalur pengadaan, jika sudah diketahui (penunjukan langsung, tender, dan sebagainya)",
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
      "Saya menyetujui data saya digunakan untuk menanggapi permintaan ini, sebagaimana dijelaskan dalam kebijakan privasi.",
    emailLabel: "Email",
  },

  careers: {
    seo: {
      title: "Karier",
      description:
        "BBT belum membuka posisi. Perkenalkan diri Anda untuk bidang pengembangan perangkat lunak, penjaminan mutu, desain, dan delivery.",
    },
    intro: {
      eyebrow: "Karier",
      title: "Bergabung dengan kami.",
      description:
        "BBT berada di tahap awal dan menambah tim secara bertahap sesuai kebutuhan proyek. Saat ini belum ada posisi yang dibuka.",
    },
    areasTitle: "Bidang yang kami kembangkan",
    areas: [
      "Pengembangan perangkat lunak",
      "Penjaminan mutu dan deployment",
      "Desain antarmuka dan pengalaman pengguna",
      "Delivery dan arsitektur solusi",
    ],
    includeTitle: "Yang perlu disertakan dalam perkenalan",
    include: [
      "Bidang yang Anda minati",
      "Ringkasan pengalaman dan tautan karya, misalnya portofolio atau repositori",
      "Ketersediaan dan lokasi kerja",
    ],
    note: "Jika pengalaman Anda sesuai dengan salah satu bidang ini, silakan perkenalkan diri. Perkenalan ditinjau ketika kebutuhan yang relevan muncul.",
    cta: "Perkenalkan diri Anda",
    mailSubject: "BBT karier: perkenalan",
  },

  ctaBand: {
    title: "Diskusikan sistem yang perlu dibangun atau didukung.",
    description:
      "Jelaskan kebutuhan Anda secara singkat. Kami menanggapi dengan langkah berikutnya dan informasi yang dibutuhkan untuk menentukan ruang lingkup.",
    cta: { label: "Ajukan konsultasi", href: "/", section: "consultation" },
  },
};
