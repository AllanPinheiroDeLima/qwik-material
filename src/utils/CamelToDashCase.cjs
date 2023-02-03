module.exports = (camelCasedKey) => {
  return camelCasedKey.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
}