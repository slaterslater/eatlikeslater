import { CgMenuBoxed as icon } from 'react-icons/cg';

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
  ],
};

// https://www.sanity.io/docs/schema-types
