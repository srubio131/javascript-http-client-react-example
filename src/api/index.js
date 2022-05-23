import { METHODS } from "./constants"
import { myFetch } from "./utils"

export function get({
  url,
  params = null,
  headers = null,
  defaultMock = {}
}) {
  return myFetch({ url, method: METHODS.GET, params, headers, defaultMock })
}

export function post({
  url,
  params = null,
  headers = null,
  defaultMock = {}
}) {
  return myFetch({ url, method: METHODS.POST, params, headers, defaultMock })
}