import { GiMeal as icon } from 'react-icons/gi';

export default {
  name: 'recipe',
  title: 'Recipes',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      title: 'Recipe Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ], // fields
  orderings: [
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
    {
      title: 'Eaten',
      name: 'eatenDesc',
      by: [
        {field: 'image.asset.originalFilename', direction: 'desc'}
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
};

// https://www.sanity.io/docs/schema-types
