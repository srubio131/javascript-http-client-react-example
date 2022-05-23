function createMockedInstance ({ status = 200, mock = null } = {}) {
    return new Promise((resolve, reject) => {
      if (status >= 400 && status <= 600) reject(mock)
      resolve(mock)
    })
  }
export function myFetch({
    url,
    method = METHODS.GET,
    params = null,
    headers = null,
    defaultMock = {}
  }) {
    const toPromise = () => fetch(`${BASE_URL}/${url}`, {
      method: METHODS.GET,
      headers: {
        ...DEFAULT_HEADERS,
        ...(headers) ? headers : {}
      },
      ...(params) ? { body: JSON.stringify(params) } : {}
    })
    .then((res) => res.json())
    .catch((error) => console.log('Error: ' + error))
    
    const mocked = ({ status = 200, mock = defaultMock } = {}) => ({
      toPromise: () => createMockedInstance({ status, mock })
    })
    return {
      toPromise,
      mocked
    }
  }