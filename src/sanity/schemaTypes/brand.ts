// src/sanity/schemaTypes/brand.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export const brandType = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      options: { hotspot: false },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'products',
      title: 'Key Products',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'website',
      title: 'Brand Website',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'name' },
  },
})
