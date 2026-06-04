import type { Block } from 'payload'

export const ScriptureQuote: Block = {
  slug: 'scriptureQuote',
  labels: {
    singular: 'Scripture Quote',
    plural: 'Scripture Quotes',
  },
  fields: [
    {
      name: 'verseText',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'reference',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'translation',
      type: 'select',
      required: true,
      defaultValue: 'NIV',
      options: [
        {
          label: 'LUT',
          value: 'LUT',
        },
        {
          label: 'ELB',
          value: 'ELB',
        },
        {
          label: 'HFA',
          value: 'HFA',
        },
        {
          label: 'NGÜ',
          value: 'NGÜ',
        },
        {
          label: 'SLT',
          value: 'SLT',
        },
        {
          label: 'NIV',
          value: 'NIV',
        },
        {
          label: 'ESV',
          value: 'ESV',
        },
        {
          label: 'KJV',
          value: 'KJV',
        },
      ],
    },
    {
      name: 'attribution',
      type: 'text',
      localized: true,
    },
  ],
}
