import * as UserActionsCreators from './user'
import * as PostsActionsCreators from './posts'
import * as CommentssActionsCreators from './comments'

export default {
    ...UserActionsCreators,
    ...PostsActionsCreators,
    ...CommentssActionsCreators
}