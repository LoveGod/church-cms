import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from './access/adminOrEditor'
import { isAuthenticated } from './access/authenticated'
import { slugField } from 'payload'

export const SermonSeries: CollectionConfig = {
  slug: 'sermon-series',

  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },

  access: {
    read: (User) => isAuthenticated(User),
    create: (User) => isAdminOrEditor(User),
    update: (User) => isAdminOrEditor(User),
    delete: (User) => isAdminOrEditor(User),
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },

    slugField({
      useAsSlug: 'title',
      localized: true,
    }),

    {
      name: 'description',
      type: 'richText',
      localized: true,
    },

    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'startDate',
      type: 'date',
    },

    {
      name: 'endDate',
      type: 'date',
    },

    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          localized: true,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          localized: true,
        },
      ],
    },
  ],
}
