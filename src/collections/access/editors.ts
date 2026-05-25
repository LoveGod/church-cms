import type { User } from '../payload-types'

export const isEditor = ({ req: { user } }: { req: { user: User } }) => {
  return user?.role === 'editor'
}
