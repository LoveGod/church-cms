import type { User } from '../payload-types'
import { isAdmin } from './admins'
import { isEditor } from './editors'

export const isAdminOrEditor = ({ req }: { req: { user: User } }) => {
  return isAdmin({ req }) || isEditor({ req })
}
