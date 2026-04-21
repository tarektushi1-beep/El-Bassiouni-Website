// src/sanity/schemaTypes/newsArticle.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export const newsArticleType = defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Company News', value: 'Company News' },
          { title: 'Product Launch', value: 'Product Launch' },
          { title: 'Industry Update', value: 'Industry Update' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Article Content',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Article Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
})
