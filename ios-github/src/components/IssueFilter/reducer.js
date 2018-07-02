import { ISSUE_STATUS_FILTER_CHANGED } from './action-types'

const defaultState = {
  statusFilter: 'open'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ISSUE_STATUS_FILTER_CHANGED: {
      return {
        ...state,
        statusFilter: state.statusFilter === 'open' ? 'closed' : 'open'
      }
    }
    default:
      return state
  }
}
