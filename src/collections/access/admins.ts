import type { User } from '../payload-types'

export const isAdmin = ({ req: { user } }: { req: { user: User } }) => {
  return user?.role === 'admin'
}
