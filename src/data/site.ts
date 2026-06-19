export const site = {
  name: 'PESUMA',
  fullName: 'Pertubuhan Gabungan Pesuruhjaya Sumpah Malaysia',
  description:
    'Platform profesional yang menyatukan komuniti Pesuruhjaya Sumpah Malaysia melalui kebajikan ahli, pembangunan ilmu, program latihan, sumber rujukan dan jaringan berintegriti.',
  url: 'https://pesuma.org.my',
  epjsUrl: 'https://epjs.kehakiman.gov.my/',
  email: 'sekretariat@pesuma.org.my',
};

export const navigation = [
  { label: 'Mengenai Kami', href: '/mengenai/' },
  { label: 'Keahlian', href: '/keahlian/' },
  { label: 'Sumber', href: '/sumber/' },
  { label: 'Berita & Acara', href: '/berita/' },
  { label: 'Kedai', href: '/kedai/' },
  { label: 'Hubungi Kami', href: '/hubungi/' },
];

export const quickActions = [
  {
    icon: 'users',
    title: 'Keahlian PESUMA',
    text: 'Ketahui manfaat ahli, syarat penyertaan dan cara mendaftar.',
    href: '/keahlian/',
  },
  {
    icon: 'calendar',
    title: 'Berita & Aktiviti',
    text: 'Ikuti program, seminar, bengkel dan pengumuman terkini.',
    href: '/berita/',
  },
  {
    icon: 'book',
    title: 'Sumber & Rujukan',
    text: 'Akses pautan undang-undang, borang, panduan dan bahan rujukan.',
    href: '/sumber/',
  },
  {
    icon: 'landmark',
    title: 'Jawatankuasa Pusat',
    text: 'Kenali barisan kepimpinan dan struktur organisasi PESUMA.',
    href: '/jawatankuasa/',
  },
  {
    icon: 'bag',
    title: 'Kedai PESUMA',
    text: 'Dapatkan cenderahati dan keperluan rasmi berkaitan amalan.',
    href: '/kedai/',
  },
  {
    icon: 'external',
    title: 'Pautan Rasmi ePJS',
    text: 'Rujuk direktori dan panduan rasmi berkaitan Pesuruhjaya Sumpah.',
    href: site.epjsUrl,
    external: true,
  },
];

export const audiences = [
  {
    number: '01',
    title: 'Untuk Ahli PESUMA',
    text: 'Akses berita, program, manfaat ahli, sumber dalaman, hebahan dan jaringan komuniti.',
  },
  {
    number: '02',
    title: 'Untuk Pesuruhjaya Sumpah & Bakal Pemohon',
    text: 'Dapatkan maklumat umum, program pembangunan profesional dan pautan rujukan rasmi.',
  },
  {
    number: '03',
    title: 'Untuk Orang Awam & Organisasi',
    text: 'Fahami peranan Pesuruhjaya Sumpah dan dapatkan pautan kepada sumber rasmi berkaitan.',
  },
];

export const benefits = [
  {
    icon: 'presentation',
    title: 'Program & Seminar',
    text: 'Peluang menyertai sesi ilmu, bengkel dan program pembangunan yang relevan dengan amalan semasa.',
  },
  {
    icon: 'network',
    title: 'Jaringan Profesional',
    text: 'Berhubung dengan komuniti Pesuruhjaya Sumpah dari seluruh Malaysia dalam ruang yang membina.',
  },
  {
    icon: 'heart',
    title: 'Sokongan & Kebajikan Ahli',
    text: 'Inisiatif kebajikan dan sokongan komuniti yang mengambil berat keperluan ahli.',
  },
  {
    icon: 'library',
    title: 'Sumber Rujukan',
    text: 'Akses tersusun kepada panduan, pautan rasmi dan bahan pembelajaran untuk rujukan harian.',
  },
  {
    icon: 'star',
    title: 'Manfaat & Akses Istimewa',
    text: 'Hebahan terpilih, peluang kolaborasi dan akses ke aktiviti khusus untuk komuniti ahli.',
  },
];

export const resources = [
  { icon: 'scale', title: 'Undang-undang & Arahan Amalan', href: '/sumber/undang-undang/' },
  { icon: 'file', title: 'Borang-Borang', href: '/sumber/borang/' },
  { icon: 'compass', title: 'Panduan Amalan', href: '/sumber/panduan/' },
  { icon: 'search', title: 'Direktori Rasmi ePJS', href: site.epjsUrl, external: true },
  { icon: 'help', title: 'Soalan Lazim', href: '/soalan-lazim/' },
  { icon: 'link', title: 'Pautan Rasmi Berkaitan', href: '/sumber/pautan/' },
];

export const products = [
  { name: 'Lencana Korporat PESUMA', category: 'Aksesori', tone: 'navy' },
  { name: 'Diari Profesional PESUMA', category: 'Alat Tulis', tone: 'gold' },
  { name: 'Tumbler Edisi PESUMA', category: 'Cenderahati', tone: 'slate' },
];
