import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  name: 'recipe',
  title: 'Recipes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Recipe Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'ingredient' }] }],
    },
  ], // fields
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'ingredients.0.name',
      topping1: 'ingredients.1.name',
      topping2: 'ingredients.2.name',
      topping3: 'ingredients.3.name',
      topping3: 'ingredients.4.name',
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
