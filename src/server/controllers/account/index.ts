import * as create from './create'
import * as Delete from './delete'
import * as Read from './read'

export const Account = {
    ...create,
    ...Delete,
    ...Read
}