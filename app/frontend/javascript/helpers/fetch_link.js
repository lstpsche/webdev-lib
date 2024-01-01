const defaultArgs = {
  onSuccess: (response) => { return response },
  onFailure: (error) => { throw new Error(error) },
  onComplete: (response) => { return response },
  errorMessage: "Internal Server Error"
}

function fetchLink (args) {
  if (args.method?.toLowerCase() === "get" || args.method === undefined)
    return fetchGet(args);
  else
    return fetchWithBody(args);
}

function filterResponseCode (response, errorMessage, method) {
  if (response.status === 200)
    return response.json();
  if (response.status === 204)
    return response;

  throw new Error(errorMessage);
}

const headers = {
  "Content-Type": "application/json"
}

function fetchGet ({
    link,
    onSuccess = defaultArgs.onSuccess,
    onFailure = defaultArgs.onFailure,
    onComplete = defaultArgs.onComplete,
    errorMessage = defaultArgs.errorMessage
  }) {
  return fetch(link, { headers })
    .then(response => filterResponseCode(response, errorMessage, "get"))
    .then(response => onSuccess(response))
    .then(response => onComplete(response))
    .catch(error => onFailure(error))
}

function fetchWithBody ({
    link, method, body = "",
    onSuccess = defaultArgs.onSuccess,
    onFailure = defaultArgs.onFailure,
    onComplete = defaultArgs.onComplete,
    errorMessage = defaultArgs.errorMessage
  }) {
  return fetch(link, { headers, method, body })
    .then(response => filterResponseCode(response, errorMessage, method?.toLowerCase()))
    .then(response => onSuccess(response))
    .then(response => onComplete(response))
    .catch(error => onFailure(error))
}

export default fetchLink;
