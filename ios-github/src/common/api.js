const baseUrl = 'https://api.github.com'

const issueUrl = ({ owner, repo }) => `${baseUrl}/repos/${owner}/${repo}/issues`

const fetchData = url => {
  return fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Request failed: no response')
      }
    })
    .then(myJson => myJson)
}

const fetchIssues = () =>
  fetchData(issueUrl({ owner: 'Alamofire', repo: 'Alamofire' }))

export default {
  fetchIssues
}
