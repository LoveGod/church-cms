import type { GlobalConfig } from 'payload'
import { isAuthenticated } from '../access/authenticated'
import { isAdminOrEditor } from '../access/adminOrEditor'
import { landingPageBlocks } from '@/blocks'

export const HomepageLayout: GlobalConfig = {
  slug: 'homepage-layout',

  access: {
    read: (User) => isAuthenticated(User),
    update: (User) => isAdminOrEditor(User),
    //create: (User) => isAdminOrEditor(User),
    //delete: (User) => isAdminOrEditor(User),
  },

  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      localized: true,
      required: true,
    },

    {
      name: 'heroSubtitle',
      type: 'textarea',
      localized: true,
    },

    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'sections',
      type: 'blocks',
      localized: true,
      blocks: [...landingPageBlocks],
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
