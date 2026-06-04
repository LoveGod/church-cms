import type { CollectionConfig } from 'payload'
import { isAuthenticated } from '../access/authenticated'
import { isAdminOrEditor } from '../access/adminOrEditor'
import { slugField } from 'payload'

export const LegalPages: CollectionConfig = {
  slug: 'legal-pages',

  admin: {
    useAsTitle: 'title',
    group: 'Pages',
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
      name: 'content',
      type: 'richText',
      localized: true,
      required: true,
    },

    {
      name: 'pageType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Impressum',
          value: 'impressum',
        },
        {
          label: 'Privacy Policy',
          value: 'privacy-policy',
        },
        {
          label: 'Cookie Policy',
          value: 'cookie-policy',
        },
      ],
    },
  ],
}
