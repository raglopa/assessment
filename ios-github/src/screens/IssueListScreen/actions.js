import {
  UPDATE_ISSUES_REQUESTED,
  UPDATE_ISSUES_SUCCEEDED,
  UPDATE_ISSUES_FAILED
} from './action-types'

export const updateIssuesRequested = payload => ({
  type: UPDATE_ISSUES_REQUESTED,
  payload
})
export const updateIssuesSucceeded = payload => ({
  type: UPDATE_ISSUES_SUCCEEDED,
  payload
})
export const updateIssuesFailed = () => ({ type: UPDATE_ISSUES_FAILED })
