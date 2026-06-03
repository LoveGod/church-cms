import type { Block } from 'payload'

export const EventHighlight: Block = {
  slug: 'eventHighlight',
  labels: {
    singular: 'Event Highlight',
    plural: 'Event Highlights',
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
      name: 'events',
      type: 'relationship',
      relationTo: 'events',
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
          label: 'Featured',
          value: 'featured',
        },
      ],
    },
    {
      name: 'showLocation',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
