import {
  UPDATE_ISSUES_REQUESTED,
  UPDATE_ISSUES_SUCCEEDED,
  UPDATE_ISSUES_FAILED
} from './action-types'

const initialRequestState = {
  success: false,
  pending: false,
  failed: false,
  errorMessage: null
}

const defaultState = {
  issues: [],
  requestState: { ...initialRequestState }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ISSUES_REQUESTED: {
      return {
        ...state,
        requestState: {
          pending: true,
          success: false,
          failed: false
        }
      }
    }
    case UPDATE_ISSUES_FAILED: {
      return {
        ...state,
        requestState: {
          pending: false,
          success: false,
          failed: true
        }
      }
    }
    case UPDATE_ISSUES_SUCCEEDED: {
      const { issues } = action.payload

      return {
        ...state,
        issues,
        requestState: {
          pending: false,
          success: true,
          failed: false
        }
      }
    }
    default:
      return state
  }
}
