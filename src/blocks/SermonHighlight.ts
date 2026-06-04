import type { Block } from 'payload'

export const SermonHighlight: Block = {
  slug: 'sermonHighlight',
  labels: {
    singular: 'Sermon Highlight',
    plural: 'Sermon Highlights',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'sermons',
      type: 'relationship',
      relationTo: 'sermons',
      hasMany: true,
      required: true,
      minRows: 1,
      maxRows: 6,
    },
    {
      name: 'layout',
      type: 'select',
      required: true,
      defaultValue: 'grid',
      options: [
        {
          label: 'Grid',
          value: 'grid',
        },
        {
          label: 'List',
          value: 'list',
        },
        {
          label: 'Carousel',
          value: 'carousel',
        },
      ],
    },
    {
      name: 'showSeries',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
