import type { Block } from 'payload'

export const RecentSermons: Block = {
  slug: 'recent-sermons',
  labels: {
    singular: 'Recent Sermons',
    plural: 'Recent Sermons',
  },
  interfaceName: 'RecentSermonsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      localized: true,
      defaultValue: 'Recent Sermons',
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
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
      name: 'showFeaturedImage',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showSpeaker',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showSeries',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showDate',
      type: 'checkbox',
      defaultValue: true,
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
