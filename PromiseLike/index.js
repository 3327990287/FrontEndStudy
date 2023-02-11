function isPromiseLike(val) {
  return val !== null &&
    (typeof val === 'object' || typeof val === 'function') &&
    typeof val.then === 'function'
}
