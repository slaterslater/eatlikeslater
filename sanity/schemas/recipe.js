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
      title: 'Eaten',
      name: 'eaten',
      type: 'date',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    },
    {
      title: 'Ingredients',
      name: 'ingredients',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'ingredient' }] }],
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
        {field: 'eaten', direction: 'desc'}
      ]
    },
  ], // orderings
  preview: {
    select: {
      title: 'name',
      media: 'image',
      ingredient0: 'ingredients.0.name',
      ingredient1: 'ingredients.1.name',
      ingredient2: 'ingredients.2.name',
      ingredient3: 'ingredients.3.name',
      ingredient4: 'ingredients.4.name',
    },
    prepare: ({ title, media, ...others }) => {
      const toppings = Object.values(others).filter(Boolean);
      return {
        title,
        media,
        subtitle: toppings.join(', '),
      };
    },
  },
};

// https://www.sanity.io/docs/schema-types
