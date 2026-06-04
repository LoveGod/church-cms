import type { User } from '../../payload-types'
import type { AccessArgs } from 'payload'

export const isAdmin = ({ req: { user } }: AccessArgs<User>) => {
  return user?.role === 'admin'
}
