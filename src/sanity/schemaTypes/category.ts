// src/sanity/schemaTypes/category.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Equipment Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
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
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Category Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [defineArrayMember({ type: 'brand' })],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'tagline' },
  },
})
