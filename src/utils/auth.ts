const TOKEN_KEY = 'xxx-auth-token'

export function getToken() {
  if (import.meta.env.DEV) {
    return 'dev-auth-token'
  }
  return localStorage.getItem(TOKEN_KEY) || ''
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function removeToken() {
  localStorage.setItem(TOKEN_KEY, '')
}
