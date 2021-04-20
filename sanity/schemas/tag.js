import { CgMenuBoxed as icon } from 'react-icons/cg';

export default {
  name: 'tag',
  title: 'Tags',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Tag Name',
      type: 'string',
    },
  ],
};

// https://www.sanity.io/docs/schema-types
