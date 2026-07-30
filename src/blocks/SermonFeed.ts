import type { Block } from 'payload'

export const SermonFeed: Block = {
  slug: 'sermon-feed',
  labels: {
    singular: 'Sermon Feed',
    plural: 'Sermon Feed',
  },
  interfaceName: 'SermonFeedBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'mode',
      type: 'select',
      defaultValue: 'recent',
      options: [
        {
          label: 'Recent',
          value: 'recent',
        },
        {
          label: 'Featured',
          value: 'featured',
        },
        {
          label: 'Series',
          value: 'series',
        },
        {
          label: 'Speaker',
          value: 'speaker',
        },
        {
          label: 'Topic',
          value: 'topic',
        },
      ],
    },
    {
      name: 'series',
      type: 'relationship',
      relationTo: 'sermon-series',
      admin: {
        condition: (_, siblingData) => siblingData.mode === 'series',
      },
    },
    {
      name: 'speaker',
      type: 'relationship',
      relationTo: 'staff',
      admin: {
        condition: (_, siblingData) => siblingData.mode === 'speaker',
      },
    },
    {
      name: 'topic',
      type: 'relationship',
      relationTo: 'topics',
      admin: {
        condition: (_, siblingData) => siblingData.mode === 'topic',
      },
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 6,
      min: 1,
      max: 12,
      admin: {
        description: 'Number of sermons to display.',
      },
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'View all sermons',
        },
        {
          name: 'url',
          type: 'text',
          defaultValue: '/sermons',
        },
      ],
    },
  ],
}
