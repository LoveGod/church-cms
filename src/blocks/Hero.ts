import type { Block } from 'payload'

const linkFields = [
  {
    name: 'label',
    type: 'text',
    required: true,
  },
  {
    name: 'linkType',
    type: 'select',
    required: true,
    defaultValue: 'internal',
    options: [
      {
        label: 'Internal',
        value: 'internal',
      },
      {
        label: 'External',
        value: 'external',
      },
    ],
  },
  {
    name: 'internalLink',
    type: 'relationship',
    relationTo: ['landing-pages', 'events', 'sermons'],
    admin: {
      condition: (_, siblingData) => siblingData?.linkType === 'internal',
    },
  },
  {
    name: 'externalUrl',
    type: 'text',
    admin: {
      condition: (_, siblingData) => siblingData?.linkType === 'external',
    },
  },
]

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'subline',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'image',
      options: [
        {
          label: 'Image',
          value: 'image',
        },
        {
          label: 'Video',
          value: 'video',
        },
        {
          label: 'Centered',
          value: 'centered',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'video',
      },
    },
    {
      name: 'videoUrl',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'video',
      },
    },
    {
      name: 'primaryCta',
      type: 'group',
      fields: linkFields,
    },
    {
      name: 'secondaryCta',
      type: 'group',
      fields: linkFields,
    },
  ],
}
