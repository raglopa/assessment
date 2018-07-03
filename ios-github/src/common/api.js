import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 2000
})
const issueUrl = ({ owner, repo }) => `/repos/${owner}/${repo}/issues`

const fetchData = (url, params) => {
  return instance({ method: 'get', url, params: { ...params } }).then(
    response => {
      if (response.status === 200) {
        return response.data
      } else {
        throw new Error('Request failed: no response')
      }
    }
  )
}

const fetchIssues = ({ state, repo }) =>
  fetchData(issueUrl({ owner: repo.owner, repo: repo.repo }), { state })

export default {
  fetchIssues
}
