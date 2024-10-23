const API_BASE_URL = process.env.REACT_APP_API_URL
const API_NAVE = API_BASE_URL + "/nave"

const request = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
  })

  const defaults = { headers: headers }
  options = Object.assign({}, defaults, options)

  return fetch(options.url, options)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response)
      }
      return response.json().then((json) => {
        return json
      })
    })
    .catch((err) => {
      if (err.status === 401) {
        window._logout()
      } else {
        return Promise.reject(err)
      }
    })
}

export function verificarEhPato(data) {
  return request({
    url: API_BASE_URL + '/ehPato/identificarECriarEstrategia',
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export function listarTodasNaves() {
  return request({
    url: API_NAVE + '/listarTodas',
    method: 'GET',
  })
}

export function buscarValoresSelectsCadastro() {
  return request({
    url: API_NAVE + '/valoresSelectsCadastro',
    method: 'GET',
  })
}

export function cadastrarNave(data) {
  return request({
    url: API_NAVE + '/criar',
    method: 'POST',
    body: JSON.stringify(data),
  })
}