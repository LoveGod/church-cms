import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },

    {
      name: 'columns',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
        },

        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
      ],
    },

    {
      name: 'copyright',
      type: 'text',
      localized: true,
    },
  ],
}
