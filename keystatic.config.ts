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
        content: fields.markdoc({
          label: 'Kandungan',
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
    committee: collection({
      label: 'Jawatankuasa',
      slugField: 'name',
      path: 'src/content/committee/*',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Nama' } }),
        position: fields.text({ label: 'Jawatan' }),
        photo: fields.image({
          label: 'Foto',
          directory: 'public/images/committee',
          publicPath: '/images/committee/',
        }),
        bio: fields.text({ label: 'Biografi ringkas', multiline: true }),
      },
    }),
  },
});
