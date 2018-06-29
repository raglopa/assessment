import { delay } from 'redux-saga'
import { call } from 'redux-saga/effects'

export function* repeatedRequest(
  request,
  { retry = 5, retryDelay = 500 } = {}
) {
  for (let i = 0; i < retry; i++) {
    try {
      return yield call(request)
    } catch (err) {
      if (i < retry - 1) {
        yield call(delay, retryDelay)
      }
    }
  }
  throw new Error('API request failed')
}
