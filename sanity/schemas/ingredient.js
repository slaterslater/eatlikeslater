import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'ingredient',
  title: 'Ingredients',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Ingredient Name',
      type: 'string',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`,
    }),
  },
};

// https://www.sanity.io/docs/schema-types
