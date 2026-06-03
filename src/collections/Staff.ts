import type { CollectionConfig } from 'payload'
import { isAuthenticated } from './access/authenticated'
import { isAdminOrEditor } from './access/adminOrEditor'
import { slugField } from 'payload'

export const Staff: CollectionConfig = {
  slug: 'staff',

  admin: {
    useAsTitle: 'name',
    group: 'Organization',
  },

  access: {
    read: (User) => isAuthenticated(User),
    create: (User) => isAdminOrEditor(User),
    update: (User) => isAdminOrEditor(User),
    delete: (User) => isAdminOrEditor(User),
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    slugField({
      useAsSlug: 'name',
      localized: true,
    }),

    {
      name: 'role',
      type: 'text',
      localized: true,
    },

    {
      name: 'bio',
      type: 'richText',
      localized: true,
    },

    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'email',
      type: 'email',
    },

    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['Instagram', 'Facebook', 'YouTube', 'LinkedIn', 'Website'],
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
}
