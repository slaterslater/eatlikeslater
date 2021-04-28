import { GiMeal as icon } from 'react-icons/gi';

export default {
  name: 'recipe',
  title: 'Recipes',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: false,
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'About',
      type: 'markdown',
      name: 'about'
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
    {
      title: 'Inspriration',
      name: 'inspiration',
      type: 'url'
    },
    {
      title: 'Recipe Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.date}/${doc.name}`
      },
      validation: Rule => Rule.required()
    } 
  ], // fields
  orderings: [
    {
      title: 'Date',
      name: 'eatenDesc',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    },
    {
      title: 'A-Z',
      name: 'nameAsc',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Z-A',
      name: 'nameDesc',
      by: [
        {field: 'name', direction: 'desc'}
      ]
    },
  ], // orderings
  preview: {
    select: {
      title: 'name',
      media: 'image',
      tag0: 'tags.0.name',
      tag1: 'tags.1.name',
      tag2: 'tags.2.name',
      tag3: 'tags.3.name',
      tag4: 'tags.4.name',
    },
    prepare: ({ title, media, ...others }) => {
      const tags = Object.values(others).filter(Boolean);
      return {
        title,
        media,
        subtitle: tags.join(', '),
      };
    },
  },
}

// https://www.sanity.io/docs/schema-types