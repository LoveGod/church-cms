import type { CollectionConfig } from 'payload'
import { isAuthenticated } from './access/authenticated'
import { isAdminOrEditor } from './access/adminOrEditor'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
    group: 'Media',
  },
  access: {
    read: (User) => isAuthenticated(User),
    create: (User) => isAdminOrEditor(User),
    update: (User) => isAdminOrEditor(User),
    delete: (User) => isAdminOrEditor(User),
  },

  upload: {
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'video/*', 'audio/*', 'application/pdf'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: 'centre',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'caption',
      type: 'textarea',
      localized: true,
    },

    {
      name: 'credit',
      type: 'text',
      localized: true,
    },

    {
      name: 'focusKeyword',
      type: 'text',
      localized: true,
    },
  ],
}
