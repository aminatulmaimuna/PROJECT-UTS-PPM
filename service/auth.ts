// Simple in-memory auth flag for development/testing.
// This does NOT persist across app reloads. Replace with AsyncStorage
// or SecureStore for real persistence.

let _isLoggedIn = false;

export function login() {
  _isLoggedIn = true;
}

export function logout() {
  _isLoggedIn = false;
}

export function isLoggedIn() {
  return _isLoggedIn;
}
