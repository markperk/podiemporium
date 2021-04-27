const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env
const URL_DIRECTORY = '/api'

const standardHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json",
}

const getPostRequest = (urlPath, body) => {
  const init = {
    ...standardHeaders,
    'x-api-key': `${REACT_APP_API_KEY}`
  }
  const payload = {
    method: 'GET',
    headers: new Headers(init)
  }
  return promise(urlPath, payload, body)
}

const getRequest = urlPath => {
  const init = {
    ...standardHeaders,
    'x-api-key': `${REACT_APP_API_KEY}`
  }
  const payload = {
    method: 'GET',
    headers: new Headers(init)
  }
  return promise(urlPath, payload)
}

const getResponse = res => {
  if (res.ok && res.status === 204) {
    return Promise.resolve({
      status: res.status,
      message: 'No Content'
    })
  }
  if (res.ok) return res.json()
  return res.text()
    .then(error => JSON.parse(error))
    .then(error => {
      throw new Error(error.message)
    })
}

const promise = (urlPath, payload, body) => {
  return new Promise(resolve => {
    const url = `${REACT_APP_BASE_URL}${URL_DIRECTORY}${urlPath}`
    fetch(url, payload, body)
      .then(response => resolve(getResponse(response)))
      .catch(error => console.error('error', error))
  })
}

export const api = {
  get: (urlPath) => getRequest(urlPath),
  post: (urlPath, body) => getPostRequest(urlPath, body)
}