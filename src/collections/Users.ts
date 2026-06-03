import type { CollectionConfig } from 'payload'
import { isAdmin } from './access/admins'
import { isAdminOrEditor } from './access/adminOrEditor'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    delete: (User) => isAdmin(User),
    update: (User) => isAdminOrEditor(User),
    unlock: (User) => isAdmin(User),

    // Define who can read/update users
    admin: (User) => isAdmin(User),
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'firstName',
      type: 'text',
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: 'user',
      required: true,
      access: {
        // Only admins can update the role
        read: () => true,
        update: (User) => isAdmin(User),
      },
    },
  ],
}
