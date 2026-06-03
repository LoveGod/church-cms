import type { Block } from 'payload'

export const RichText: Block = {
  slug: 'richText',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
    },
    {
      name: 'width',
      type: 'select',
      required: true,
      defaultValue: 'default',
      options: [
        {
          label: 'Narrow',
          value: 'narrow',
        },
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Wide',
          value: 'wide',
        },
      ],
    },
  ],
}
