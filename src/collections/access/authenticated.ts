import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'

export const isAuthenticated = ({ req: { user } }: AccessArgs<User>) => {
  return Boolean(user)
}
