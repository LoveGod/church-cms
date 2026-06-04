import type { CollectionConfig } from 'payload'
import { isAuthenticated } from './access/authenticated'
import { isAdminOrEditor } from './access/adminOrEditor'
import { slugField } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'startDate', 'location', '_status'],
    group: 'Content',
  },

  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
    },
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
      name: 'excerpt',
      type: 'textarea',
      localized: true,
    },

    {
      name: 'content',
      type: 'richText',
      localized: true,
    },

    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'startDate',
      type: 'date',
      required: true,
    },

    {
      name: 'endDate',
      type: 'date',
    },

    {
      name: 'allDay',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'location',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          localized: true,
        },
        {
          name: 'address',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'googleMapsUrl',
          type: 'text',
        },
      ],
    },

    {
      name: 'registrationUrl',
      type: 'text',
    },

    {
      name: 'recurring',
      type: 'group',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'frequency',
          type: 'select',
          options: ['daily', 'weekly', 'monthly'],
        },
      ],
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
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
