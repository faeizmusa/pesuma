import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'PESUMA CMS',
    },
  },
  collections: {
    posts: collection({
      label: 'Berita & Artikel',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Tajuk' } }),
        date: fields.date({ label: 'Tarikh' }),
        category: fields.select({
          label: 'Kategori',
          options: [
            { label: 'Berita', value: 'Berita' },
            { label: 'Aktiviti', value: 'Aktiviti' },
            { label: 'Pengumuman', value: 'Pengumuman' },
            { label: 'Program', value: 'Program' },
          ],
          defaultValue: 'Berita',
        }),
        excerpt: fields.text({
          label: 'Ringkasan',
          multiline: true,
          validation: { length: { min: 40, max: 220 } },
        }),
        coverImage: fields.image({
          label: 'Imej muka',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        gallery: fields.array(
          fields.object({
            image: fields.image({
              label: 'Gambar',
              directory: 'public/images/posts',
              publicPath: '/images/posts/',
            }),
            caption: fields.text({ label: 'Kapsyen (optional)' }),
          }),
          {
            label: 'Galeri gambar',
            description: 'Gambar tambahan untuk dokumentasi acara.',
            itemLabel: (props) => props.fields?.caption?.value || 'Gambar',
          },
        ),
        content: fields.markdoc({
          label: 'Kandungan',
        }),
        /** For linking posts to committee terms as achievements */
        relatedTerm: fields.text({
          label: 'Penggal berkaitan (slug)',
          description: 'Contoh: penggal-2025-2027. Biarkan kosong jika tiada.',
        }),
        isAchievement: fields.checkbox({
          label: 'Artikel ini pencapaian penggal',
          defaultValue: false,
        }),
      },
    }),
    events: collection({
      label: 'Program & Acara',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Tajuk program' } }),
        date: fields.date({ label: 'Tarikh' }),
        location: fields.text({ label: 'Lokasi' }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Akan Datang', value: 'Akan Datang' },
            { label: 'Pendaftaran Dibuka', value: 'Pendaftaran Dibuka' },
            { label: 'Selesai', value: 'Selesai' },
          ],
          defaultValue: 'Akan Datang',
        }),
        excerpt: fields.text({ label: 'Ringkasan', multiline: true }),
        registrationUrl: fields.url({ label: 'Pautan pendaftaran' }),
        content: fields.markdoc({
          label: 'Maklumat penuh',
        }),
      },
    }),
    resources: collection({
      label: 'Sumber',
      slugField: 'title',
      path: 'src/content/resources/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Tajuk sumber' } }),
        type: fields.select({
          label: 'Jenis',
          options: [
            { label: 'Undang-undang', value: 'undang-undang' },
            { label: 'Borang', value: 'borang' },
            { label: 'Panduan', value: 'panduan' },
            { label: 'Pautan rasmi', value: 'pautan-rasmi' },
          ],
          defaultValue: 'panduan',
        }),
        description: fields.text({ label: 'Penerangan', multiline: true }),
        fileUrl: fields.url({ label: 'URL fail' }),
        externalUrl: fields.url({ label: 'URL luar' }),
      },
    }),
    terms: collection({
      label: 'Penggal Jawatankuasa',
      slugField: 'name',
      path: 'src/content/terms/*',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Nama slug' } }),
        termName: fields.text({ label: 'Nama penggal', validation: { length: { min: 1 } } }),
        startDate: fields.date({ label: 'Tarikh mula' }),
        endDate: fields.date({ label: 'Tarikh tamat' }),
        isCurrent: fields.checkbox({ label: 'Penggal semasa', defaultValue: false }),
        theme: fields.text({ label: 'Tema / fokus', multiline: false }),
        presidentMessage: fields.text({
          label: 'Amanat Presiden',
          multiline: true,
          description: 'Ringkasan amanat atau fokus kepimpinan penggal ini.',
        }),
        groupPhoto: fields.image({
          label: 'Gambar berkumpulan',
          directory: 'public/images/committee',
          publicPath: '/images/committee/',
        }),
      },
    }),
    committee: collection({
      label: 'Ahli Jawatankuasa',
      slugField: 'name',
      path: 'src/content/committee/*',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Slug' } }),
        fullName: fields.text({ label: 'Nama penuh (paparan)', validation: { length: { min: 1 } } }),
        position: fields.text({ label: 'Jawatan', validation: { length: { min: 1 } } }),
        positionGroup: fields.select({
          label: 'Kumpulan jawatan',
          options: [
            { label: 'Kepimpinan Utama', value: 'Kepimpinan Utama' },
            { label: 'Majlis Tertinggi', value: 'Majlis Tertinggi' },
            { label: 'Ketua Biro', value: 'Ketua Biro' },
            { label: 'Ahli Jawatankuasa', value: 'Ahli Jawatankuasa' },
            { label: 'Pemeriksa Kira-kira', value: 'Pemeriksa Kira-kira' },
            { label: 'Penasihat', value: 'Penasihat' },
          ],
          defaultValue: 'Ahli Jawatankuasa',
        }),
        displayOrder: fields.integer({ label: 'Susunan paparan', validation: { min: 1 } }),
        term: fields.text({
          label: 'Penggal (slug)',
          description: 'Contoh: penggal-2025-2027',
          validation: { length: { min: 1 } },
        }),
        photo: fields.image({
          label: 'Foto potret',
          directory: 'public/images/committee',
          publicPath: '/images/committee/',
        }),
        bio: fields.text({
          label: 'Biodata ringkas',
          multiline: true,
          description: '50–120 perkataan.',
        }),
        state: fields.text({ label: 'Negeri / kawasan' }),
        yearAppointed: fields.text({ label: 'Tahun mula dilantik' }),
        experience: fields.text({ label: 'Pengalaman / bidang tumpuan', multiline: true }),
        bureauRole: fields.text({ label: 'Peranan tambahan (cth: Ketua Biro)' }),
        quote: fields.text({ label: 'Petikan profesional', multiline: true }),
        email: fields.text({ label: 'E-mel rasmi' }),
        linkedin: fields.url({ label: 'Pautan LinkedIn / profil profesional' }),
      },
    }),
  },
});
