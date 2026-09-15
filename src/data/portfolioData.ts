import { 
  ProfileData, 
  Project, 
  SkillCategory, 
  ExperienceItem, 
  ServiceItem, 
  TestimonialItem,
  ModelGuruSection,
  FilosofiSection,
  RefleksiAspect,
  RencanaTindakLanjutItem 
} from '../types';

export const initialProfileData: ProfileData = {
  name: 'Roy Hanafi, S.Kom.',
  title: 'Mahasiswa PPG Informatika & Pendidik Digital',
  tagline: 'Menuntun Kodrat Zaman tunas muda di pelosok Jambi melalui Berpikir Komputasional, teknologi web adaptif, dan prinsip "Fortis Fortuna Adiuvat".',
  motto: 'Fortis Fortuna Adiuvat (Keberuntungan berpihak pada mereka yang berani)',
  avatarUrl: '/images/roy_hanafi_photo.jpg',
  bio: `Nama saya Roy Hanafi. Saya lahir dan tumbuh di sebuah desa di Jambi yang selama bertahun-tahun seolah terlupakan oleh waktu. Di tempat saya, kemajuan adalah sesuatu yang datang terlambat: kami baru menyapa listrik PLN di tahun 2016, merasakan halus alur aspal di tahun 2018, dan hingga kini, akses teknologi kami masih tertinggal hampir setengah dekade dibanding saudara-saudara di Pulau Jawa.

Jujur saja, menjadi seorang pendidik tidak pernah ada dalam daftar cita-cita saya. Ambisi awal saya sederhana namun berat: saya hanya ingin memajukan desa tempat saya dilahirkan. Namun, takdir menuntun saya ke pintu ruang kelas. Secara tidak sengaja, saya terjun ke dunia pendidikan sebagai seorang guru honorer. Di sanalah titik balik itu terjadi. Melihat binar mata anak-anak didik saya, saya merasa tertantang. Saya tidak lagi sekadar ingin membangun fisik desa, tetapi ingin mendidik dan menuntun tunas-tunas muda ini menuju impian yang ingin mereka gapai.

Saya sadar sepenuhnya akan keterbatasan yang saya miliki. Keilmuan saya di bidang keguruan masih minim, terutama jika disandingkan dengan rekan-rekan guru di Jawa yang memiliki akses lebih mudah terhadap teknologi, inovasi, dan pelatihan berkualitas. Namun, bagi saya, perbedaan itu bukanlah alasan untuk berkecil hati, melainkan pelecut untuk terus belajar dan meniru praktik baik dari mereka. Dalam setiap langkah saya di ruang kelas, saya memegang teguh sebuah prinsip "Fortis Fortuna Adiuvat" (Keberuntungan berpihak pada mereka yang berani). Keberanian inilah yang saya tanamkan pada diri sendiri dan siswa-siswa saya: berani untuk bermimpi meski tinggal di pelosok, berani berinovasi meski fasilitas terbatas, dan berani melangkah meski jalan di depan masih panjang. Saya mungkin memulai dengan banyak kekurangan, tetapi dedikasi saya untuk memajukan desa melalui pendidikan adalah janji yang akan terus saya jaga.`,
  email: 'peserta.31054@ppg.belajar.id',
  phone: '+62 821-7890-4321',
  location: 'Jambi, Indonesia',
  availability: 'Mahasiswa PPG Informatika & Calon Guru Profesional',
  githubUrl: 'https://github.com/royhanafi-edu',
  linkedinUrl: 'https://linkedin.com/in/roy-hanafi-informatika',
  whatsappUrl: 'https://wa.me/6282178904321?text=Halo%20Pak%20Roy%20Hanafi,%20saya%20tertarik%20berdiskusi%20tentang%20pembelajaran%20Informatika%20dan%20teknologi%20pendidikan.',
  experienceYears: 4,
  completedProjects: 24,
  clientSatisfaction: 100,
  openSourceContributions: 18,
};

export const modelGuruData: ModelGuruSection[] = [
  {
    badge: 'Visi Peradaban',
    title: 'Jembatan Peradaban untuk Anak Desa',
    content: 'Menjadi guru bagi saya bukan sekadar profesi, melainkan sebuah misi penebusan untuk tanah kelahiran. Visi besar yang saya usung adalah menjadi jembatan peradaban bagi anak-anak desa, di mana saya berperan untuk memperpendek jarak ketertinggalan antara pelosok Jambi dengan kemajuan di Pulau Jawa. Saya bercita-cita menjadi guru yang tidak hanya memindahkan ilmu dari buku ke kepala, tetapi seorang penggerak yang mampu mengubah keterbatasan infrastruktur menjadi ruang kreativitas tanpa batas.',
    points: [
      'Memperpendek jurang kesenjangan digital antara pelosok dan kota metropolitan',
      'Mengubah keterbatasan sarana menjadi katalis kreativitas mandiri',
      'Menanamkan pola pikir bahwa asal-usul desa bukan halangan berprestasi global'
    ]
  },
  {
    badge: 'Kompetensi',
    title: 'Kompetensi Adaptif, Kontekstual & Solutif',
    content: 'Untuk menuju gelar guru profesional, saya berkomitmen membangun kompetensi yang adaptif dan solutif. Saya tidak akan menjadikan ketertinggalan teknologi sebagai alasan untuk berhenti—sebaliknya, saya akan mengadopsi semangat pembelajar sepanjang hayat. Saya akan gigih mempelajari inovasi digital dan metode pedagogi modern, lalu dengan kreatif memodifikasinya agar relevan dengan kondisi lapangan di desa saya. Saya ingin menguasai kemampuan mengajar yang kontekstual: memanfaatkan alam dan kearifan lokal sebagai laboratorium belajar, sehingga pendidikan tetap terasa canggih dalam esensinya meski sederhana dalam kemasannya.',
    points: [
      'Pembelajar sepanjang hayat yang terbuka terhadap metodologi modern',
      'Pemanfaatan alam dan lingkungan sekitar sebagai laboratorium komputasi',
      'Modifikasi teknologi mutakhir agar dapat berjalan pada gawai sederhana'
    ]
  },
  {
    badge: 'Karakter',
    title: 'Resiliensi Tinggi & Fortis Fortuna Adiuvat',
    content: 'Secara karakter, saya menempa diri untuk menjadi pribadi yang resilien dan berani. Sesuai dengan prinsip Fortis Fortuna Adiuvat, saya akan membangun karakter guru yang tidak gentar menghadapi sunyinya fasilitas. Saya ingin dikenal sebagai pendidik yang memiliki empati tinggi, yang mampu "menuntun" setiap anak didik menemukan bakat terpendam mereka di tengah kepungan keterbatasan. Saya akan membawa aura optimisme ke dalam kelas, menunjukkan kepada siswa bahwa asal-usul dari desa terpencil bukanlah penghalang untuk memiliki daya saing global.',
    points: [
      'Resiliensi sosiologis pantang menyerah dalam menghadapi keterbatasan',
      'Empati tulus untuk menuntun kodrat dan potensi setiap siswa',
      'Penyebar optimisme dan energi positif di ruang kelas'
    ]
  },
  {
    badge: 'Misi Hidup',
    title: 'Menyalakan Pelita di Kegelapan',
    content: 'Pada akhirnya, misi saya adalah membuktikan bahwa keberuntungan dan keberhasilan memang benar-benar milik mereka yang berani melangkah. Saya akan berdiri di depan kelas sebagai sosok guru yang profesional secara intelektual, namun tetap rendah hati secara spiritual: seorang putra daerah yang pulang untuk menyalakan pelita di kegelapan, memastikan bahwa masa depan anak-anak Jambi setara cerahnya dengan anak-anak di belahan bumi manapun.',
    points: [
      'Profesional secara intelektual dan rendah hati secara spiritual',
      'Putra daerah yang mengabdi sepenuhnya untuk kemajuan kampung halaman',
      'Memperjuangkan kesetaraan masa depan anak pelosok dengan anak kota'
    ]
  }
];

export const filosofiMengajarData: FilosofiSection = {
  title: 'Filosofi Mengajar: Pendidikan yang Menuntun',
  quote: '"Pendidikan adalah menuntun segala kekuatan kodrat yang ada pada anak-anak, agar mereka dapat mencapai keselamatan dan kebahagiaan yang setinggi-tingginya baik sebagai manusia maupun anggota masyarakat."',
  corePrinciple: 'Mengubah Keterbatasan Menjadi Inovasi',
  description: 'Filosofi mengajar saya berakar kuat pada pemikiran Ki Hadjar Dewantara (KHD), yaitu Pendidikan yang Menuntun. Saya memandang bahwa setiap peserta didik lahir membawa kodrat alamnya masing-masing. Di era siber ini, tugas saya sebagai guru Informatika adalah menuntun Kodrat Zaman mereka. Saya menganut prinsip bahwa pembelajaran Informatika bukan sekadar transfer pengetahuan teknis (transfer of knowledge), melainkan sebuah upaya memerdekakan pikiran melalui Berpikir Komputasional (Computational Thinking). Di tengah disparitas akses teknologi, filosofi saya adalah “Mengubah Keterbatasan Menjadi Inovasi.” Saya percaya bahwa esensi informatika terletak pada daya nalar dan pemecahan masalah, bukan pada kemewahan perangkat yang digunakan.',
  pillars: [
    {
      title: 'Menuntun Kodrat Zaman',
      explanation: 'Membimbing generasi muda desa agar melek teknologi dan siap bersaing di era revolusi digital tanpa mencabut akar nilai budaya dan kearifan lokal daerahnya.'
    },
    {
      title: 'Berpikir Komputasional (Computational Thinking)',
      explanation: 'Menekankan dekomposisi masalah, pengenalan pola, abstraksi, dan perancangan algoritma sebagai instrumen memerdekakan daya nalar siswa.'
    },
    {
      title: 'Mengubah Keterbatasan Menjadi Inovasi',
      explanation: 'Esensi informatika bukan pada kemewahan PC atau spesifikasi hardware tinggi, melainkan kemampuan menemukan solusi cerdas dengan apa yang ada di tangan.'
    },
    {
      title: 'Mindful, Meaningful, & Joyful',
      explanation: 'Menghadirkan suasana belajar yang penuh kesadaran (mindful), bermakna bagi kehidupan nyata (meaningful), serta menyenangkan dan menggembirakan bagi siswa (joyful).'
    }
  ]
};

export const refleksiPplData: {
  pengantar: string;
  aspek: RefleksiAspect[];
  rtl: RencanaTindakLanjutItem[];
} = {
  pengantar: 'Memasuki program Pendidikan Profesi Guru (PPG) Informatika merupakan fase transformasi metakognitif yang memaksa saya untuk melihat kembali kesiapan diri secara objektif. Sebagai seorang pendidik yang mengawali karier dari ruang kelas di pelosok Jambi dengan segala keterbatasan infrastruktur, saya membawa kombinasi unik antara resiliensi sosiologis di satu sisi, dan kebutuhan mendesak akan pemutahiran kompetensi pedagogis serta profesional di sisi lain. Melalui refleksi atas praktik pembelajaran yang telah dilaksanakan selama PPL Terbimbing, saya mengidentifikasi dinamika kekuatan dan area pengembangan dalam diri saya.',
  aspek: [
    {
      dimension: 'Kompetensi Pedagogis',
      title: 'Desain Pembelajaran Berpusat pada Siswa & Inovasi Low-Resource',
      strengths: [
        'Mampu merancang ekosistem pembelajaran yang berpusat pada murid (student-centered learning) berlandaskan filosofi KHD.',
        'Mengintegrasikan prinsip pembelajaran Mindful, Meaningful, dan Joyful ke dalam Modul Ajar Informatika kurikulum terkini.',
        'Menerapkan Pembelajaran Berdiferensiasi secara kontekstual di tengah keterbatasan fasilitas sekolah.',
        'Secara adaptif memanfaatkan gawai Android siswa sebagai media hands-on coding menggunakan aplikasi "Coding C", berhasil meruntuhkan dinding pembatas (barrier) ketiadaan lab komputer.'
      ],
      weaknesses: [
        'Tantangan mitigasi miskonsepsi saat transisi dari logika berpikir visual (flowchart) ke penulisan sintaks pemrograman berbasis teks.',
        'Layar gawai yang kecil sering meningkatkan tingkat frustrasi siswa saat proses debugging dan pelacakan error sintaks.',
        'Manajemen waktu dalam memfasilitasi kelompok heterogen pada metode peer-teaching belum sepenuhnya optimal, sehingga siswa kurang dominan berisiko tertinggal.'
      ],
      keyInsight: 'Inovasi coding via ponsel berhasil membuka akses, namun membutuhkan jembatan perantara (scaffolding) yang lebih bertahap agar beban kognitif siswa pemula tidak berlebihan.'
    },
    {
      dimension: 'Kompetensi Profesional',
      title: 'Fondasi Logika Komputasi & Pemutakhiran Tren Industri',
      strengths: [
        'Memiliki fondasi keilmuan Informatika yang kuat pada logika algoritma dasar, dekomposisi masalah, dan struktur data bahasa C.',
        'Prinsip "Fortis Fortuna Adiuvat" membentuk karakter pembelajar sepanjang hayat yang gigih dan tidak sungkan mengadopsi best practices dari guru-guru berpengalaman.',
        'Kemampuan mengonstruksikan studi kasus logika yang relevan dengan problem sehari-hari di desa.'
      ],
      weaknesses: [
        'Keterbatasan dalam pembaruan terhadap tren teknologi terbaru skala industri seperti Artificial Intelligence, Cloud Computing, dan Data Science.',
        'Minimnya portofolio proyek industri riil yang dapat dijadikan studi kasus konkret untuk memperkaya wawasan mutakhir siswa di kelas.'
      ],
      keyInsight: 'Penguasaan konsep dasar algoritma sudah solid, namun perlu diperluas dengan wawasan AI dan aplikasi riil terkini melalui pelatihan berkelanjutan.'
    },
    {
      dimension: 'Kompetensi Sosial & Kepribadian',
      title: 'Resiliensi Daerah, Motivasi Persuasif & Komunikasi Ekosistem',
      strengths: [
        'Dedikasi dan komitmen mendalam untuk memajukan anak-anak tanah kelahiran di Jambi sebagai pendorong utama pengabdian.',
        'Kemampuan komunikasi persuasif yang kuat dalam memotivasi siswa agar berani bermimpi melampaui batas geografis mereka.',
        'Karakter guru yang tangguh, sabar, dan berempati tinggi mendampingi anak-anak dari keluarga prasejahtera.'
      ],
      weaknesses: [
        'Idealisme tinggi terkadang memicu resistensi internal ketika berhadapan dengan kecepatan adaptasi birokrasi sekolah atau ekosistem pendidikan lokal yang cenderung masih konvensional.'
      ],
      keyInsight: 'Perlu pendekatan kolaboratif yang lebih sabar dan taktis dalam merangkul rekan guru senior dan pihak birokrasi agar perubahan paradigma berjalan harmonis.'
    }
  ],
  rtl: [
    {
      area: 'Scaffolding Pemrograman Teks',
      action: 'Mengadopsi Metode Parsons Puzzles',
      targetMethod: 'Siswa menyusun potongan-potongan blok kode acak yang sudah valid secara logika, sebelum diwajibkan menulis sintaks secara mandiri dari awal.',
      expectedOutcome: 'Menekan beban kognitif (cognitive load) siswa pemula dan mengurangi frustrasi debugging pada layar smartphone.'
    },
    {
      area: 'Asesmen Formatif Real-Time',
      action: 'Pemanfaatan Kuis Digital Interaktif',
      targetMethod: 'Mengintegrasikan Wordwall atau Quizizz mode offline/online ringan pada awal dan akhir fase materi inti.',
      expectedOutcome: 'Mendeteksi miskonsepsi sintaks pemrograman secara cepat dan real-time sebelum melanjutkan ke konsep berikutnya.'
    },
    {
      area: 'Pengembangan Profesional Mandiri',
      action: 'Sertifikasi Global & PMM',
      targetMethod: 'Menyelesaikan modul kompetensi terverifikasi di Platform Merdeka Mengajar (PMM) dan kursus teknologi cloud/AI pemula.',
      expectedOutcome: 'Memperbarui materi ajar dengan wawasan tren teknologi industri terkini untuk memperkaya referensi siswa.'
    },
    {
      area: 'Komunitas Praktisi (Kombel)',
      action: 'Inisiasi Kombel Informatika Pelosok',
      targetMethod: 'Membangun wadah kolaborasi guru Informatika di wilayah pelosok/3T untuk merumuskan Modul Informatika Unplugged (tanpa komputer) dan Low-Resource.',
      expectedOutcome: 'Keterbatasan infrastruktur fisik tidak lagi membatasi kemerdekaan berpikir tunas-tunas muda di seluruh pelosok daerah.'
    }
  ]
};

export const sampleProjects: Project[] = [
  {
    id: 'coding-c-android',
    title: 'Modul Ajar & Hands-on Coding C Smartphone',
    category: 'edukasi-informatika',
    categoryLabel: 'Inovasi Pembelajaran',
    summary: 'Strategi pembelajaran pemrograman bahasa C menggunakan gawai Android (aplikasi Coding C) untuk sekolah dengan keterbatasan laboratorium komputer.',
    description: 'Sebuah terobosan pedagogis yang lahir dari keterbatasan fasilitas di sekolah pelosok Jambi. Mengubah gawai Android siswa menjadi sarana hands-on programming untuk mempraktikkan logika algoritma, input/output, percabangan if-else, perulangan, dan array dasar. Dilengkapi modul ajar berdiferensiasi dan panduan mitigasi kesalahan ketik di layar kecil.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    tags: ['Kurikulum Merdeka', 'Coding C Android', 'Pembelajaran Berdiferensiasi', 'Bahasa C', 'PPL PPG'],
    features: [
      'Alur scaffolding bertahap dari pemahaman algoritma ke sintaks bahasa C',
      'Panduan instalasi dan kompilasi offline tanpa kuota internet boros',
      'Kumpulan lembar kerja siswa (LKPD) berbasis studi kasus kontekstual pedesaan',
      'Daftar tips dan trik meminimalisir typo sintaks pada keyboard virtual ponsel',
      'Sistem evaluasi berbasis peer-review dan presentasi logika algoritma'
    ],
    laravelVersion: 'Ekosistem Kurikulum Informatika',
    database: 'Modul Ajar Terverifikasi PMM',
    architectureHighlights: [
      'Penerapan sintaks C standar (GCC compiler di Android) tanpa memerlukan koneksi PC',
      'Diferensiasi konten berdasarkan kesiapan belajar siswa (pemula, menengah, mandiri)',
      'Dokumentasi rubrik penilaian diagnostik, formatif, dan sumatif yang terstandar'
    ],
    role: 'Penyusun Modul & Praktikan PPL PPG Informatika',
    demoUrl: 'https://guru.kemdikbud.go.id',
    githubUrl: 'https://github.com/royhanafi-edu/modul-coding-c-android',
    featured: true
  },
  {
    id: 'parsons-puzzles-web',
    title: 'Media Interaktif Parsons Puzzles (Laravel + Tailwind)',
    category: 'saas-system',
    categoryLabel: 'Aplikasi Web Edukasi',
    summary: 'Aplikasi drag-and-drop potongan kode program untuk melatih logika berpikir komputasional siswa tanpa beban kognitif berlebih.',
    description: 'Aplikasi web interaktif yang dikembangkan sebagai realisasi Rencana Tindak Lanjut (RTL) PPL. Siswa berlatih menyusun potongan baris kode C yang diacak untuk membentuk program yang valid secara runtut dan tepat. Dibangun dengan Laravel 11 dan antarmuka ringan Tailwind CSS yang responsif diakses dari ponsel layar kecil sekalipun.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Laravel 11', 'Tailwind CSS', 'Alpine.js', 'Parsons Puzzles', 'Scaffolding Method'],
    features: [
      'Drag-and-drop interaktif potongan sintaks kode yang ringan di smartphone',
      'Feedback instan deteksi indentasi dan urutan logika yang keliru',
      'Tingkat kesulitan berjenjang: dari 4 baris hingga 12 baris dengan distractor code',
      'Dashboard monitoring guru untuk melihat waktu pengerjaan dan titik kesulitan siswa',
      'Ringan dan hemat kuota data dengan aset CSS/JS terkompilasi efisien'
    ],
    laravelVersion: 'Laravel 11.x',
    database: 'MySQL dengan struktur soal bertingkat',
    architectureHighlights: [
      'Tailwind CSS Mobile-First dengan touch-action ramah layar sentuh ponsel 5-6 inch',
      'Komponen Blade reusable untuk card puzzle dan papan susun sintaks',
      'Penyimpanan progress belajar secara lokal (LocalStorage) dengan sinkronisasi opsional'
    ],
    role: 'Pengembang Aplikasi & Pengkaji Pedagogik',
    demoUrl: 'https://parsons-edu.example.com',
    githubUrl: 'https://github.com/royhanafi-edu/parsons-puzzle-laravel',
    featured: true
  },
  {
    id: 'siakad-sekolah-desa',
    title: 'SIAKAD & LMS Sekolah Pelosok (Low-Bandwidth)',
    category: 'saas-system',
    categoryLabel: 'Sistem Informasi Sekolah',
    summary: 'Sistem informasi akademik dan e-learning terpadu yang dirancang khusus untuk sekolah di daerah dengan bandwidth internet terbatas.',
    description: 'Portal akademik terpadu yang mengelola absensi kelas, penilaian Kurikulum Merdeka, bank materi ajar, dan rekap nilai rapor. Dirancang dengan teknologi Laravel 11 dan Tailwind CSS yang sangat hemat transfer data, memiliki mode offline caching, serta ramah digunakan oleh guru yang baru bermigrasi ke administrasi digital.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Laravel 11', 'Tailwind CSS', 'Livewire', 'MySQL', 'DomPDF', 'Low-Bandwidth'],
    features: [
      'Multi-Role: Kepala Sekolah, Guru Mapel, Wali Kelas, dan Siswa',
      'Pencatatan nilai formatif dan sumatif sesuai format Kurikulum Merdeka',
      'Cetak Rapor Siswa otomatis ke PDF dengan template rapi dan terstandar',
      'Mode kompresi data gambar dan aset untuk koneksi sinyal 3G/EDGE',
      'Fitur rekap kehadiran harian dengan status izin, sakit, dan alpa'
    ],
    laravelVersion: 'Laravel 11.x (PHP 8.3)',
    database: 'MySQL dengan query indexing teroptimasi',
    architectureHighlights: [
      'Repository Pattern memisahkan business logic dari controller',
      'Caching konfigurasi dan data nilai siswa untuk respon instan',
      'Desain antarmuka Tailwind CSS kontras tinggi agar nyaman di layar laptop proyektor kelas'
    ],
    role: 'Full-Stack Developer & Administrator',
    demoUrl: 'https://siakad-desa.example.com',
    githubUrl: 'https://github.com/royhanafi-edu/siakad-sekolah-desa',
    featured: true
  },
  {
    id: 'informatika-unplugged',
    title: 'Modul Informatika Unplugged & Laboratorium Alam',
    category: 'edukasi-informatika',
    categoryLabel: 'Inovasi Pembelajaran',
    summary: 'Kumpulan aktivitas Berpikir Komputasional tanpa menggunakan komputer dengan memanfaatkan lingkungan alam dan kearifan lokal desa Jambi.',
    description: 'Solusi konkret ketika listrik desa padam atau perangkat gawai terbatas. Mengajarkan pilar Computational Thinking (Dekomposisi, Pengenalan Pola, Abstraksi, dan Algoritma) melalui permainan berbasis kearifan lokal, biji-bijian, susunan batu sungai, dan simulasi jaringan manusia di lapangan sekolah.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
    tags: ['Informatika Unplugged', 'Computational Thinking', 'Kearifan Lokal', 'Laboratorium Alam'],
    features: [
      'Simulasi algoritma sorting (Bubble Sort) menggunakan barisan tinggi badan siswa',
      'Pembelajaran sistem bilangan biner menggunakan kartu daun bolak-balik',
      'Konsep routing jaringan internet menggunakan pesan berantai di halaman sekolah',
      'Panduan asesmen observasi karakter gotong royong dan bernalar kritis'
    ],
    laravelVersion: 'Kurikulum Merdeka Mandiri',
    database: 'Dokumentasi Terbuka Guru Indonesia',
    architectureHighlights: [
      'Mengintegrasikan filosofi Ki Hadjar Dewantara: alam sekitar sebagai laboratorium belajar',
      'Tidak bergantung pada aliran listrik PLN maupun kuota internet sama sekali',
      'Bahan ajar dapat diadopsi secara bebas oleh guru-guru di daerah 3T'
    ],
    role: 'Inisiator & Penulis Modul',
    demoUrl: 'https://belajar.id',
    githubUrl: 'https://github.com/royhanafi-edu/informatika-unplugged-jambi',
    featured: false
  },
  {
    id: 'kombel-pelosok-platform',
    title: 'Portal Komunitas Praktisi (Kombel) Guru Informatika 3T',
    category: 'laravel-mysql',
    categoryLabel: 'Platform Kolaborasi',
    summary: 'Platform berbagi praktik baik, modul ajar low-resource, dan ruang diskusi daring bagi guru-guru Informatika di pelosok nusantara.',
    description: 'Wadah kolaborasi antar guru Informatika pelosok untuk saling menguatkan, meniru praktik baik, dan berbagi solusi atas minimnya fasilitas sekolah. Dilengkapi fitur unggah perangkat ajar, forum tanya jawab pemrograman dasar, dan kalender kegiatan berbagi praktik baik.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Laravel 11', 'Tailwind CSS', 'Forum Diskusi', 'MySQL', 'Komunitas Praktisi'],
    features: [
      'Repositori modul ajar Informatika berlisensi Creative Commons',
      'Forum tanya jawab seputar kendala kurikulum dan implementasi coding di kelas',
      'Integrasi tautan Zoom/Google Meet untuk webinar berbagi praktik baik berkala',
      'Sistem kurasi modul ajar terbaik oleh tim guru pamong dan rekan sejawat'
    ],
    laravelVersion: 'Laravel 11.x',
    database: 'MySQL dengan Full-Text Search',
    architectureHighlights: [
      'Tailwind CSS dengan navigasi bersih, ringan, dan ramah koneksi pedesaan',
      'Autentikasi akun belajar.id terintegrasi',
      'Pengarsipan dokumen PDF modul ajar secara terstruktur di storage lokal dan cloud'
    ],
    role: 'Founder & Lead Developer',
    demoUrl: 'https://kombel-pelosok.example.com',
    githubUrl: 'https://github.com/royhanafi-edu/kombel-informatika-pelosok',
    featured: false
  },
  {
    id: 'asesmen-formatif-bridge',
    title: 'Bridge Asesmen Formatif Real-Time & Analisis Miskonsepsi',
    category: 'fullstack-api',
    categoryLabel: 'Evaluasi Pembelajaran',
    summary: 'Aplikasi pembantu guru untuk menganalisis butir soal evaluasi pemrograman teks secara cepat menggunakan integrasi kuis interaktif.',
    description: 'Alat bantu evaluasi yang menghubungkan hasil asesmen formatif (Wordwall, Quizizz, atau Google Form) dengan dashboard visualisasi pemetaan miskonsepsi sintaks pemrograman siswa. Membantu guru mendeteksi baris kode mana yang paling sering membuat siswa bingung.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['Laravel 11', 'Tailwind CSS', 'Chart.js', 'REST API', 'Asesmen Formatif'],
    features: [
      'Visualisasi peta panas (heat map) soal yang paling banyak mengalami kesalahan',
      'Klasifikasi tipe miskonsepsi: sintaksis (titik koma, kurung), semantis, atau logika',
      'Rekomendasi tindakan perbaikan otomatis untuk kelompok siswa tertentu',
      'Ekspor laporan perkembangan belajar formatif untuk rapor diagnostik'
    ],
    laravelVersion: 'Laravel 11.x',
    database: 'MySQL / SQLite untuk portabilitas cepat',
    architectureHighlights: [
      'API webhook untuk menerima skor siswa dari formulir asesmen eksternal',
      'Grafik interaktif Chart.js yang dibungkus komponen Tailwind responsif'
    ],
    role: 'Pengembang & Peneliti Tindakan Kelas',
    demoUrl: 'https://asesmen-informatika.example.com',
    githubUrl: 'https://github.com/royhanafi-edu/asesmen-formatif-bridge',
    featured: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Pedagogik & Filosofi Ki Hadjar Dewantara',
    icon: 'GraduationCap',
    description: 'Pemahaman mendalam tentang prinsip Pendidikan yang Menuntun, diferensiasi pembelajaran, dan perancangan modul ajar kontekstual.',
    skills: [
      {
        name: 'Filosofi Pendidikan KHD (Menuntun Kodrat)',
        proficiency: 95,
        level: 'Mahir',
        description: 'Menuntun Kodrat Alam & Kodrat Zaman, menghadirkan pembelajaran Mindful, Meaningful, dan Joyful.',
        tags: ['Ki Hadjar Dewantara', 'Kodrat Zaman']
      },
      {
        name: 'Pembelajaran Berdiferensiasi',
        proficiency: 92,
        level: 'Mahir',
        description: 'Diferensiasi konten, proses, dan produk berdasarkan asesmen diagnostik awal kesiapan belajar siswa.',
        tags: ['Kurikulum Merdeka', 'Student-Centered']
      },
      {
        name: 'Scaffolding & Metode Parsons Puzzles',
        proficiency: 90,
        level: 'Mahir',
        description: 'Teknik bertahap menyusun potongan kode acak untuk menekan beban kognitif (cognitive load) siswa pemula.',
        tags: ['Pedagogi Coding', 'RTL PPL']
      },
      {
        name: 'Asesmen Formatif & Diagnostik Real-Time',
        proficiency: 92,
        level: 'Mahir',
        description: 'Penggunaan Wordwall, Quizizz, dan rubrik autentik untuk deteksi miskonsepsi logika dan sintaks.',
        tags: ['Evaluasi Ajar', 'Umpan Balik']
      },
      {
        name: 'Informatika Unplugged (Tanpa Komputer)',
        proficiency: 94,
        level: 'Mahir',
        description: 'Eksplorasi konsep komputasi menggunakan analogi kearifan lokal, alam desa, dan aktivitas kinetik.',
        tags: ['Low-Resource', 'Kearifan Lokal']
      }
    ]
  },
  {
    title: 'Logika Pemrograman & Berpikir Komputasional',
    icon: 'Cpu',
    description: 'Kompetensi keilmuan informatika dari dekomposisi masalah, algoritma dasar, hingga implementasi kode pemrograman.',
    skills: [
      {
        name: 'Computational Thinking (4 Pilar)',
        proficiency: 95,
        level: 'Mahir',
        description: 'Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma untuk pemecahan masalah nyata.',
        tags: ['Daya Nalar', 'Problem Solving']
      },
      {
        name: 'Pemrograman Bahasa C (Coding C Android)',
        proficiency: 90,
        level: 'Mahir',
        description: 'Sintaksis dasar C, tipe data, percabangan, perulangan, array, dan fungsi yang dioptimalkan di smartphone.',
        tags: ['Hands-on Mobile', 'Algoritma']
      },
      {
        name: 'Flowchart & Logika Algoritmik',
        proficiency: 94,
        level: 'Mahir',
        description: 'Pemodelan alur logika terstruktur dengan diagram alir terstandar sebelum masuk ke bahasa pemrograman teks.',
        tags: ['Logika Visual', 'Transisi Konseptual']
      },
      {
        name: 'Struktur Data Dasar & Pelacakan Debugging',
        proficiency: 86,
        level: 'Berpengalaman',
        description: 'Array satu dimensi, string manipulation, penelusuran kesalahan logika (dry run tracing).',
        tags: ['Data Structures', 'Debugging']
      }
    ]
  },
  {
    title: 'Pengembangan Web Edukasi (Laravel & Tailwind CSS)',
    icon: 'Code2',
    description: 'Pengembangan perangkat lunak berbasis web untuk mendukung ekosistem digital sekolah yang ringan, aman, dan mudah dirawat.',
    skills: [
      {
        name: 'Laravel 11 & PHP Modern',
        proficiency: 92,
        level: 'Mahir',
        description: 'Arsitektur MVC, Eloquent ORM, Routing, Blade Components, Middleware, Form Requests, dan REST API.',
        tags: ['Framework Inti', 'Clean Architecture']
      },
      {
        name: 'Tailwind CSS (v3 / v4)',
        proficiency: 94,
        level: 'Mahir',
        description: 'Desain mobile-first, utility-first styling, desain ramah bandwidth pedesaan, dan custom tema warna.',
        tags: ['Responsive Design', 'Low Bandwidth']
      },
      {
        name: 'Basis Data MySQL & Relasional',
        proficiency: 88,
        level: 'Mahir',
        description: 'Perancangan ERD sekolah, schema migrations, relasi tabel, indexing query, dan integritas data.',
        tags: ['Database', 'ACID']
      },
      {
        name: 'Alpine.js & Interaktivitas Web',
        proficiency: 85,
        level: 'Berpengalaman',
        description: 'Interaktivitas drag-and-drop kode, modal dialog instan, dan manipulasi DOM ringan tanpa reload halaman.',
        tags: ['Frontend Interaktif', 'Minimalist JS']
      }
    ]
  },
  {
    title: 'Media Pembelajaran & Kolaborasi Digital',
    icon: 'Layers',
    description: 'Penguasaan perangkat lunak pendukung pembelajaran, platform kementerian, dan repositori terbuka.',
    skills: [
      {
        name: 'Platform Merdeka Mengajar (PMM)',
        proficiency: 94,
        level: 'Mahir',
        description: 'Eksplorasi modul ajar, unggah Bukti Karya, asesmen murid, dan partisipasi dalam Komunitas Belajar.',
        tags: ['Kemendikbudristek', 'Bukti Karya']
      },
      {
        name: 'Canva for Education & Infografis Ajar',
        proficiency: 92,
        level: 'Mahir',
        description: 'Pembuatan slide presentasi visual menarik, lembar kerja siswa (LKPD), dan poster logika komputasi.',
        tags: ['Visual Ajar', 'Infografis']
      },
      {
        name: 'Git, GitHub & Open Source Edukasi',
        proficiency: 86,
        level: 'Berpengalaman',
        description: 'Version control modul ajar, distribusi bahan ajar terbuka, dan kolaborasi kode sumber.',
        tags: ['Open Educational Resources', 'Git']
      }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-ppl',
    period: '2024 - Sekarang',
    role: 'Praktikan PPL Terbimbing (PPG Informatika)',
    organization: 'Sekolah Laboratorium Mitra PPG',
    location: 'Jambi, Indonesia',
    type: 'work',
    summary: 'Melaksanakan Praktik Pengalaman Lapangan (PPL) Terbimbing dengan mengajar mata pelajaran Informatika fase D/E, merancang Modul Ajar Kurikulum Merdeka, serta menerapkan inovasi coding via gawai.',
    achievements: [
      'Mengimplementasikan pembelajaran hands-on coding C menggunakan aplikasi ponsel cerdas "Coding C" di kelas minim sarana komputer.',
      'Menyusun modul ajar berdiferensiasi yang disesuaikan dengan kesiapan belajar dan gaya belajar siswa desa.',
      'Melakukan refleksi komprehensif atas dinamika pedagogis, profesional, dan sosial untuk menyusun Rencana Tindak Lanjut (RTL) terukur.'
    ],
    techStack: ['Kurikulum Merdeka', 'Coding C Android', 'Pembelajaran Berdiferensiasi', 'PPL Terbimbing']
  },
  {
    id: 'exp-ppg-student',
    period: '2024 - Sekarang',
    role: 'Mahasiswa Pendidikan Profesi Guru (PPG) Informatika',
    organization: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    location: 'Indonesia',
    type: 'education',
    summary: 'Menempuh pendidikan profesi untuk meraih sertifikasi Guru Profesional, mendalami filosofi Ki Hadjar Dewantara, perancangan asesmen autentik, dan pembelajaran berpusat pada peserta didik.',
    achievements: [
      'Menyelesaikan siklus pembelajaran mandiri dan terbimbing dengan pemahaman mendalam tentang prinsip Mindful, Meaningful, dan Joyful.',
      'Merumuskan strategi inovasi "Mengubah Keterbatasan Menjadi Inovasi" untuk mengatasi kesenjangan fasilitas pendidikan di pelosok.'
    ],
    techStack: ['Filosofi KHD', 'Pedagogik Modern', 'Computational Thinking', 'PMM']
  },
  {
    id: 'exp-guru-honorer',
    period: '2020 - Sekarang',
    role: 'Guru Honorer Informatika',
    organization: 'Sekolah Menengah di Desa Pelosok',
    location: 'Jambi, Indonesia',
    type: 'work',
    summary: 'Titik balik pengabdian hidup: mengajar mata pelajaran Informatika di tengah keterbatasan listrik yang baru hadir 2016 dan aspal tahun 2018. Menuntun anak-anak desa berani bermimpi melampaui batas geografis mereka.',
    achievements: [
      'Menginisiasi pembelajaran Informatika Unplugged menggunakan kearifan lokal dan lingkungan alam desa saat sarana digital terbatas.',
      'Membangun sistem informasi dan modul penilaian digital berbasis web lokal sekolah.',
      'Menanamkan semboyan hidup "Fortis Fortuna Adiuvat" kepada ratusan anak didik untuk berani melangkah dan bersaing secara adil.'
    ],
    techStack: ['Informatika SMP/SMA', 'Unplugged Computing', 'Web Sekolah', 'Pengabdian Daerah']
  },
  {
    id: 'exp-kombel-founder',
    period: '2023 - Sekarang',
    role: 'Penggagas Komunitas Praktisi (Kombel) Informatika Pelosok',
    organization: 'Komunitas Belajar Mandiri Guru 3T',
    location: 'Jambi & Regional',
    type: 'work',
    summary: 'Mewadahi guru-guru Informatika di daerah terpencil untuk saling meniru praktik baik, berbagi modul ajar bebas biaya, dan merumuskan media pembelajaran hemat sumber daya.',
    achievements: [
      'Menyelenggarakan sesi berbagi daring dan luring seputar pemanfaatan gawai siswa untuk pembelajaran informatika bermakna.',
      'Mendistribusikan lebih dari 15 paket Modul Ajar dan Lembar Kerja Siswa (LKPD) yang dapat diaplikasikan tanpa lab komputer mewah.'
    ],
    techStack: ['Komunitas Belajar', 'Peer Coaching', 'OER Modul Ajar', 'Kolaborasi Guru']
  },
  {
    id: 'edu-s1',
    period: '2015 - 2019',
    role: 'Sarjana Komputer (S.Kom.) - Teknik Informatika',
    organization: 'Fakultas Ilmu Komputer & Informatika',
    location: 'Indonesia',
    type: 'education',
    summary: 'Mempelajari fondasi Rekayasa Perangkat Lunak, Algoritma & Pemrograman Dasar, Struktur Data, Arsitektur Basis Data, dan Pengembangan Aplikasi Web modern.',
    achievements: [
      'Mendalami logika algoritma komputasi, bahasa pemrograman C, dan framework web modern (Laravel).',
      'Memilih kembali ke desa kelahiran setelah lulus untuk mengabdikan keilmuan teknologi bagi kemajuan tanah kelahiran.'
    ],
    techStack: ['Algoritma & Pemrograman', 'Bahasa C', 'Laravel', 'MySQL', 'Software Engineering']
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'service-pedagogi-ct',
    title: 'Pembelajaran Computational Thinking',
    subtitle: 'Logika Algoritma & Problem Solving',
    description: 'Pendampingan pembelajaran Berpikir Komputasional untuk siswa dengan metode kontekstual: dekomposisi masalah, pengenalan pola, dan perancangan algoritma yang relevan dengan kehidupan nyata pedesaan.',
    icon: 'Cpu',
    deliverables: [
      'Modul ajar 4 pilar Computational Thinking',
      'Latihan studi kasus nalar kontekstual',
      'Metode scaffolding bertahap dari konsep ke kode',
      'Evaluasi pemahaman logika berbasis rubrik autentik'
    ],
    popularBadge: true
  },
  {
    id: 'service-low-resource-coding',
    title: 'Inovasi Coding Berbasis Smartphone',
    subtitle: 'Solusi Keterbatasan Lab Komputer',
    description: 'Pelatihan dan penerapan praktik langsung pengodean bahasa C atau pemrograman dasar menggunakan gawai ponsel Android (Coding C), meruntuhkan hambatan ketiadaan sarana PC di sekolah pelosok.',
    icon: 'Sparkles',
    deliverables: [
      'Panduan setup kompilator C offline di Android',
      'Teknik mitigasi kesalahan ketik (debugging di HP)',
      'Lembar kerja siswa (LKPD) mandiri dan kelompok',
      'Strategi peer-teaching di kelompok heterogen'
    ]
  },
  {
    id: 'service-web-edukasi',
    title: 'Pengembangan Web Edukasi & SIAKAD',
    subtitle: 'Laravel 11 & Tailwind CSS Low-Bandwidth',
    description: 'Membangun aplikasi web sekolah, sistem informasi akademik, dan platform asesmen mandiri yang ringan, cepat dimuat pada koneksi internet terbatas, dan mudah dioperasikan guru.',
    icon: 'Code2',
    deliverables: [
      'Arsitektur web bersih dan aman berbasis Laravel 11',
      'Desain antarmuka responsif ramah gawai dengan Tailwind CSS',
      'Sistem manajemen nilai Kurikulum Merdeka otomatis',
      'Fitur ekspor laporan rapor format PDF dan data Excel'
    ]
  },
  {
    id: 'service-unplugged-cs',
    title: 'Modul Informatika Unplugged & Kombel',
    subtitle: 'Belajar Komputasi Tanpa Bergantung Komputer',
    description: 'Penyusunan perangkat pembelajaran komputasi tanpa komputer yang memanfaatkan kearifan lokal dan alam desa, serta pendampingan pembentukan Komunitas Praktisi (Kombel) antar guru daerah.',
    icon: 'Layers',
    deliverables: [
      'Paket aktivitas kinestetik simulasi algoritma',
      'Laboratorium alam sebagai analogi teknologi',
      'Rencana Tindak Lanjut (RTL) berbasis refleksi PPL',
      'Bahan tayang dan instrumen asesmen formatif instan'
    ]
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Drs. H. Mulyadi, M.Pd.',
    role: 'Guru Pamong PPL & Guru Penggerak',
    company: 'Sekolah Mitra PPL PPG Informatika',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Pak Roy Hanafi menunjukkan resiliensi dan dedikasi luar biasa selama PPL Terbimbing. Inovasinya memanfaatkan aplikasi Coding C di ponsel siswa saat laboratorium komputer terbatas membuktikan bahwa beliau menghayati betul filosofi Ki Hadjar Dewantara: menuntun kodrat zaman di tengah keterbatasan sarana.',
    rating: 5,
    projectRelation: 'PPL Terbimbing PPG Informatika'
  },
  {
    id: 'testi-2',
    name: 'Dimas Kurniawan',
    role: 'Siswa Kelas IX',
    company: 'SMP di Pelosok Jambi',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    quote: 'Dulu saya mengira coding komputer itu hanya untuk orang kaya di kota yang punya laptop canggih. Bersama Pak Roy, kami bisa belajar membuat program dari HP sendiri. Beliau selalu bilang "Fortis Fortuna Adiuvat" dan membuat kami percaya diri untuk terus belajar.',
    rating: 5,
    projectRelation: 'Pembelajaran Coding C Smartphone'
  },
  {
    id: 'testi-3',
    name: 'Dr. Indah Permatasari, M.T.',
    role: 'Dosen Pembimbing Lapangan (DPL)',
    company: 'Program Studi PPG Informatika',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Refleksi akhir PPL Pak Roy sangat matang dan metakognitif. Rencana tindak lanjutnya mengadopsi Parsons Puzzles untuk menekan cognitive load siswa pemula serta inisiasi Komunitas Praktisi Pelosok adalah bukti nyata karakter calon Guru Profesional yang transformatif.',
    rating: 5,
    projectRelation: 'Refleksi & Rencana Tindak Lanjut PPG'
  }
];

export const sampleBladeCode = `{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Portofolio Roy Hanafi | PPG Informatika & Web Developer' }}</title>
    
    {{-- Fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    
    {{-- Vite Scripts & Styles (Tailwind CSS) --}}
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-rose-500 selection:text-white">
    {{-- Navigasi Portofolio PPG --}}
    <x-navbar :profile="$profile" />

    {{-- Konten Utama Pembelajaran & Edukasi --}}
    <main>
        {{ $slot }}
    </main>

    {{-- Footer --}}
    <x-footer :profile="$profile" />
</body>
</html>
`;

export const sampleControllerCode = `<?php

namespace App\\Http\\Controllers;

use App\\Models\\Project;
use App\\Models\\RefleksiPpl;
use App\\Models\\Skill;
use Illuminate\\Http\\Request;
use Illuminate\\View\\View;

class PortfolioController extends Controller
{
    /**
     * Menampilkan profil portofolio Roy Hanafi (PPG Informatika).
     */
    public function index(): View
    {
        $profile = [
            'name'   => 'Roy Hanafi, S.Kom.',
            'role'   => 'Mahasiswa PPG Informatika',
            'motto'  => 'Fortis Fortuna Adiuvat',
            'status' => 'Calon Guru Profesional'
        ];

        $modulProyek = Project::where('is_published', true)
            ->latest()
            ->take(6)
            ->get();

        $skills = Skill::orderBy('category')->get();

        return view('portfolio.roy_hanafi', compact('profile', 'modulProyek', 'skills'));
    }
}
`;
