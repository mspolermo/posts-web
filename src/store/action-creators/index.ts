import * as UserActionsCreators from './user'
import * as CommentsActionsCreators from './comments'

export default {
    ...UserActionsCreators,
    ...CommentsActionsCreators
}