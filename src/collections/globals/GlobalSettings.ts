import type { GlobalConfig } from 'payload'
import { isAuthenticated } from '../access/authenticated'
import { isAdminOrEditor } from '../access/adminOrEditor'

export const GlobalSettings: GlobalConfig = {
  slug: 'global-settings',

  access: {
    read: (User) => isAuthenticated(User),
    update: (User) => isAdminOrEditor(User),
    //create: (User) => isAdminOrEditor(User),
    //delete: (User) => isAdminOrEditor(User),
  },

  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },

    {
      name: 'defaultLocale',
      type: 'select',
      required: true,
      options: ['en', 'de'],
      defaultValue: 'en',
    },

    {
      name: 'siteUrl',
      type: 'text',
      required: true,
    },

    {
      name: 'defaultSeoImage',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'contactEmail',
      type: 'email',
    },

    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },

    {
      name: 'announcementBar',
      type: 'group',
      localized: true,
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
        },
        {
          name: 'text',
          type: 'text',
        },
      ],
    },
  ],
}
