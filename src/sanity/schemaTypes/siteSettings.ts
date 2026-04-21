// src/sanity/schemaTypes/siteSettings.ts
import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code, no spaces. Example: 201234567890',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Displayed in footer and contact page. Example: +20 2 1234 5678',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'googleMapsEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'The full embed URL from Google Maps → Share → Embed a map → Copy HTML, extract the src="" value',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
